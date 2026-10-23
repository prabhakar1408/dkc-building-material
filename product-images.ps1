param([switch]$ManifestOnly)
$ErrorActionPreference = 'Continue'
[Net.ServicePointManager]::SecurityProtocol = [Net.SecurityProtocolType]::Tls12
$root = Split-Path -Parent $MyInvocation.MyCommand.Path
$out = Join-Path $root 'images\products'
New-Item -ItemType Directory -Force -Path $out | Out-Null

$src = [ordered]@{
  'ultratech'      = 'https://materialrunner.in/products/ultratech-ppc-cement-50-kg-bag-quantity-50-bags?srsltid=AYCX9vJNW1U-5T0vojM_nISbkfMs1plCeo3NqfzUjyaLjEW8wPpmZsTK'
  'acc'            = 'https://theroyalbuilders.in/product/acc-cement-50kg/'
  'ambuja'         = 'https://www.ceoinsightsindia.com/news/ambuja-cements-boosts-advertising-push-for-premium-cement-sales-nwid-24026.html'
  'plaster-morang' = 'https://www.indiamart.com/proddetail/morang-construction-sand-2851559753812.html?srsltid=AYCX9vKfU6zvHqrZ2cTty3wyBj22LJLYy1wLVBavf0pmD8JhrNg-yALL'
  'moti-morang'    = 'https://www.indiamart.com/proddetail/river-construction-sand-mideam-size-2854013954848.html?srsltid=AYCX9vIC7GK5inlnS9jfRCXZEnmdTYHDhImU7P15rs1SGnepXODMjWC5'
  'gitti-20'       = 'https://www.tradeindia.com/products/20-mm-black-gitti-9799614.html'
  'tmt'            = 'https://www.tirupati.one/product/tmt'
  'binding-wire'   = 'https://srjsteel.in/binding-wire/'
  'nails-screws'   = 'https://www.aspltd.co.uk/nails-or-screws/'
  'nuts-bolts'     = 'https://www.essentracomponents.com/en-us/news/solutions/fastening-components/what-are-the-different-types-of-nuts-and-bolts?srsltid=AYCX9vIyUWWrkUyLcJy8UaomrJHeDFPQgqwFeHWGTHIQ7qzQmkIKXVtQ'
  'hammer'         = 'https://www.tataagrico.com/product/tata-agrico-machinist-hammer-fibre-glass-handle-shot-blasting-before-painting-200gm-hmm002/'
  'pliers-spanner' = 'https://www.meesho.com/8-pcs-doe-spanner-set-6mm-to-22mm8-inch-plier/p/8ua0eh'
  'screwdriver'    = 'https://www.flipkart.com/taparia-840-standard-screwdriver-set-pack-6-combination/p/itmfy8dkkdtgk3kc'
  'door-lock'      = 'https://www.flipkart.com/b-k-jagan-co-main-door-latch-bolt-lock-kundi-4inch-mounted-stopper/p/itmc7ee64c368899'
  'hinges'         = 'https://www.indiamart.com/proddetail/stainless-steel-kabja-2856744874873.html?srsltid=AYCX9vK-hsBejgpwpDX7Wp9u5gVefOZKy9ehVGO4z5NoQQd5vRJ5eAtt'
  'taps-fittings'  = 'https://www.supreme.co.in/pipe/bath-fittings/products/pipe-rubber-ring-type'
  'paint-brush'    = 'https://www.amazon.in/Crowncell-Paint-Brush-Roller-Brushes/dp/B0G628XFZN'
  'measuring-tape' = 'https://www.ibo.com/measuring-layout-tool/c/3197'
}

function Write-Manifest {
  $map = [ordered]@{}
  foreach ($k in $src.Keys) {
    $f = Get-ChildItem $out -File -ErrorAction SilentlyContinue | Where-Object { $_.BaseName -ieq $k -and $_.Extension -match '^\.(jpe?g|png|webp|avif|gif|svg)$' } | Select-Object -First 1
    if ($f) { $map[$k] = $f.Name }
  }
  if ($map.Count -eq 0) { $json = '{}' } else { $json = ConvertTo-Json -InputObject $map -Compress }
  [IO.File]::WriteAllText((Join-Path $root 'js\product-images.js'), ('const PRODUCT_IMAGES = ' + $json + ';' + "`n"), (New-Object Text.UTF8Encoding $false))
  return $map
}

if (-not $ManifestOnly) {
  $ua = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0 Safari/537.36'
  $hd = @{ 'Accept-Language' = 'en-US,en;q=0.9'; 'Accept' = 'text/html,application/xhtml+xml,*/*;q=0.8' }
  $pats = @(
    '<meta[^>]+(?:property|name)\s*=\s*["'']og:image(?::secure_url)?["''][^>]*?content\s*=\s*["'']([^"'']+)["'']',
    '<meta[^>]+content\s*=\s*["'']([^"'']+)["''][^>]*?(?:property|name)\s*=\s*["'']og:image["'']',
    '<meta[^>]+(?:property|name)\s*=\s*["'']twitter:image(?::src)?["''][^>]*?content\s*=\s*["'']([^"'']+)["'']',
    '<link[^>]+rel\s*=\s*["'']image_src["''][^>]*?href\s*=\s*["'']([^"'']+)["'']',
    '"image"\s*:\s*\[?\s*"(https?:[^"]+)"'
  )
  $failed = @()
  foreach ($k in $src.Keys) {
    $page = $src[$k]
    Write-Host ("[" + $k + "] ") -NoNewline
    $tmp = Join-Path $out ($k + '.tmp')
    try {
      $r = Invoke-WebRequest -Uri $page -UseBasicParsing -UserAgent $ua -Headers $hd -TimeoutSec 30
      $html = [string]$r.Content
      $img = $null
      foreach ($p in $pats) {
        $m = [regex]::Match($html, $p, 'IgnoreCase')
        if ($m.Success) { $img = $m.Groups[1].Value; break }
      }
      if (-not $img) {
        foreach ($m in [regex]::Matches($html, '<img[^>]+src\s*=\s*["'']([^"'']+\.(?:jpe?g|png|webp)[^"'']*)["'']', 'IgnoreCase')) {
          if ($m.Groups[1].Value -notmatch 'logo|icon|sprite|avatar|pixel|blank|loader') { $img = $m.Groups[1].Value; break }
        }
      }
      if (-not $img) { throw 'page par image ka link nahi mila' }
      $img = [Net.WebUtility]::HtmlDecode($img).Replace('\/', '/')
      $img = ([Uri]::new([Uri]$page, $img)).AbsoluteUri
      $resp = Invoke-WebRequest -Uri $img -UseBasicParsing -UserAgent $ua -Headers @{ Referer = $page } -OutFile $tmp -PassThru -TimeoutSec 40
      $ct = [string](@($resp.Headers['Content-Type'])[0])
      if ($ct -and $ct -notmatch 'image|octet-stream') { throw ('image nahi mili (type: ' + $ct + ')') }
      $len = (Get-Item $tmp).Length
      if ($len -lt 4000) { throw 'image bahut chhoti ya invalid hai' }
      $ext = ''
      if ($ct -match 'jpe?g') { $ext = 'jpg' }
      elseif ($ct -match 'png') { $ext = 'png' }
      elseif ($ct -match 'webp') { $ext = 'webp' }
      elseif ($ct -match 'avif') { $ext = 'avif' }
      elseif ($ct -match 'gif') { $ext = 'gif' }
      elseif ($ct -match 'svg') { $ext = 'svg' }
      else {
        $e2 = [IO.Path]::GetExtension(([Uri]$img).AbsolutePath).TrimStart('.').ToLower()
        if ($e2 -match '^(jpg|jpeg|png|webp|avif|gif|svg)$') { $ext = $e2 } else { $ext = 'jpg' }
      }
      Get-ChildItem $out -File | Where-Object { $_.BaseName -ieq $k -and $_.Extension -ne '.tmp' } | Remove-Item -Force
      Move-Item $tmp (Join-Path $out ($k + '.' + $ext)) -Force
      Write-Host ('OK  ' + [int]($len / 1KB) + ' KB') -ForegroundColor Green
    }
    catch {
      if (Test-Path $tmp) { Remove-Item $tmp -Force -ErrorAction SilentlyContinue }
      Write-Host ('FAIL: ' + $_.Exception.Message) -ForegroundColor Red
      $failed += $k
    }
    Start-Sleep -Milliseconds 700
  }
  if ($failed.Count -gt 0) {
    Write-Host ''
    Write-Host 'Ye images download nahi hui (website par hide rahenge):' -ForegroundColor Yellow
    $failed | ForEach-Object { Write-Host ('  ' + $_ + '  <-  ' + $src[$_]) }
    Write-Host 'Inhe browser se save karke images\products\<naam>.jpg rakho, phir:  powershell -ExecutionPolicy Bypass -File product-images.ps1 -ManifestOnly' -ForegroundColor Yellow
  }
}
$m = Write-Manifest
Write-Host ''
Write-Host ('Website par dikhne wale products: ' + $m.Count + ' / ' + $src.Count) -ForegroundColor Green