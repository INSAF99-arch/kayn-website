$root = (Get-Location).Path
$l = New-Object System.Net.HttpListener
$l.Prefixes.Add("http://localhost:5174/")
$l.Start()
$types = @{ ".html"="text/html; charset=utf-8"; ".css"="text/css"; ".js"="application/javascript; charset=utf-8"; ".webp"="image/webp" }
while ($l.IsListening) {
  $c = $l.GetContext()
  $p = $c.Request.Url.LocalPath; if ($p -eq "/") { $p = "/index.html" }
  $f = Join-Path $root ($p.TrimStart("/") -replace "/", "\")
  if (Test-Path $f -PathType Leaf) {
    $b = [IO.File]::ReadAllBytes($f); $e = [IO.Path]::GetExtension($f)
    $c.Response.ContentType = $types[$e]; $c.Response.OutputStream.Write($b, 0, $b.Length)
  } else { $c.Response.StatusCode = 404 }
  $c.Response.Close()
}

