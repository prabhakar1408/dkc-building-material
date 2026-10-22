$root = Split-Path -Parent $MyInvocation.MyCommand.Path
$gal = Join-Path $root "images\gallery"
New-Item -ItemType Directory -Force -Path $gal | Out-Null
$exts = ".jpg", ".jpeg", ".png", ".webp", ".avif", ".gif"
$files = Get-ChildItem $gal -File | Where-Object { $exts -contains $_.Extension.ToLower() } | Sort-Object Name
$items = @()
foreach ($f in $files) {
  $n = $f.BaseName.ToLower()
  $c = 'Dukaan'
  $label = $null
  if ($n -like 'dukaan-samne*') { $label = 'Dukaan ka Samne ka Hissa' }
  elseif ($n -like 'dukaan-andar*') { $label = 'Dukaan ke Andar ka Nazara' }
  elseif ($n -like 'dukaan-jhalak-*') { $label = 'Dukaan ki Jhalak ' + ($n -replace '\D', '') }
  elseif ($n -match 'cement') { $c = 'Cement' }
  elseif ($n -match 'morang|sand|gitti|stone|dust|balu') { $c = 'Morang & Gitti' }
  elseif ($n -match 'sariya|saria|tmt|chhad|steel') { $c = 'Sariya' }
  elseif ($n -match 'hardware|tool|lock|pipe|paint|nail|bolt|hammer') { $c = 'Hardware' }
  if (-not $label) {
    $label = ($f.BaseName -replace '[-_]+', ' ' -replace '\(\d+\)', '' -replace '\s*\d+\s*$', '').Trim()
    if ($label -eq '' -or $label -match '^(img|dsc|pxl|photo|whatsapp|image|screenshot)') { $label = $c }
    $label = (Get-Culture).TextInfo.ToTitleCase($label.ToLower())
  }
  $items += [pscustomobject]@{ f = $f.Name; c = $c; t = $label }
}
if ($items.Count -eq 0) { $json = "[]" } else { $json = ConvertTo-Json -InputObject @($items) -Compress }
[IO.File]::WriteAllText((Join-Path $root "js\gallery-data.js"), "const GALLERY = $json;`n", (New-Object Text.UTF8Encoding $false))
Write-Host ("Gallery updated: " + $items.Count + " photos") -ForegroundColor Green