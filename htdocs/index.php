<!DOCTYPE html>
<html lang="en">
<head>
    <title>PictureMinimizer123 - picgenerator.webitfactory.com</title>
    <meta name="description" content="Create your own simply pictures in html5 with the PictureMinimizer123 - Checkout my other generators">
    <meta charset="utf-8">
    <meta name="author" content="Lukas Beck <lb(at)webitfactory.com>">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="shortcut icon" href="files/favicon/favicon.ico" type="image/x-icon">
    <link rel="icon" href="files/favicon/favicon.ico" type="image/x-icon">
    <link rel="apple-touch-icon" sizes="180x180" href="files/favicon/apple-touch-icon.png">
    <link rel="icon" type="image/png" sizes="32x32" href="files/favicon/favicon-32x32.png">
    <link rel="icon" type="image/png" sizes="16x16" href="files/favicon/favicon-16x16.png">
    <link rel="manifest" href="files/favicon/manifest.json">
    <link rel="mask-icon" href="files/favicon/safari-pinned-tab.svg" color="#5bbad5">
    <meta name="theme-color" content="#ffffff">
    <meta name="robots" content="index,follow" />
    <meta name="language" content="en">
    <meta name="keywords" content="picture,creator,html5,html,javascript">
    <meta property="og:title" content="PictureMinimizer123 - picgenerator.webitfactory.com" />
    <meta property="og:url" content="http://bouncegenerator.webitfactory.com" />
    <meta property="og:image" content="/files/img/pro_bounceGen.jpg" />
    <meta property="og:description" content="Create your own simply pictures in html5" />
    <meta property="og:type"   content="website" />
    <link href="https://fonts.googleapis.com/css?family=Roboto:300,300i" rel="stylesheet">
    <link rel="stylesheet" href="files/css/design.css">
</head>
<body>
<div id="LEFT" class="infoBoxClose">
    <div id="HEADER"><h1>PictureMinimizer123</h1></div>
    <canvas id="MAIN_CANVAS" style="background-color: #fff;"></canvas>
</div>

<div id="RIGHT" class="infoBoxClose">
    <form id="GENERATOR_FORM">
        <div class="form_input">
            <label for="INPUT_UPLOAD_PICTURE">Picture width (px)</label>
            <input type="file" name="INPUT_UPLOAD_PICTURE" id="INPUT_UPLOAD_PICTURE">
        </div>
        <div class="form_input">
            <label for="INPUT_CANVAS_WIDTH">Picture width (px)</label>
            <input type="number" name="INPUT_CANVAS_WIDTH" id="INPUT_CANVAS_WIDTH" value="800" placeholder="800" minlength="1" maxlength="20">
        </div>
        <div class="form_input">
            <label for="INPUT_CANVAS_HEIGHT">Picture height (px)</label>
            <input type="number" name="INPUT_CANVAS_HEIGHT" id="INPUT_CANVAS_HEIGHT" value="600" placeholder="600" minlength="1" maxlength="20">
        </div>
        <div class="form_input">
            <label for="INPUT_JPG_QUALITY">JPG quality (1 to 100)</label>
            <input type="number" name="INPUT_JPG_QUALITY" id="INPUT_JPG_QUALITY" value="100" placeholder="100" minlength="1" maxlength="3">
        </div>
        <div class="form_input">
            <a class="button" download="newImage.jpg" id="DOWNLOAD_LINK">Download</a>
        </div>
    </form>
</div>
<div id="OUTPUT_MSG"></div>
<button id="OPEN_INFO">Informations</button>
<div id="INFO_BOX">
    <div class="closeButton infoBoxClose">X</div>
    <div class="head">You can find me here:</div>
    <div class="mid">
        <div class="fb">
            <a target="_blank" href="//www.facebook.com/lukas.beck36"></a>
        </div>
        <div class="github">
            <a target="_blank" href="//github.com/LBeckX"></a>
        </div>
        <div class="homepage">
            <a target="_blank" href="//www.unitgreen.com"></a>
        </div>
        <div class="homepage2">
            <a target="_blank" href="//www.webitfactory.com"></a>
        </div>
    </div>
    <div class="footer">
        Contact: <a href="&#109;&#097;&#105;&#108;&#116;&#111;&#058;&#108;&#098;&#064;&#117;&#110;&#105;&#116;&#103;&#114;&#101;&#101;&#110;&#046;&#099;&#111;&#109;">lb(at)unitgreen.com</a>
        <br>
        <a href="//www.unitgreen.com/meta/impressum.php">Impressum / Datenschutz</a>
    </div>
</div>
</body>
<script src="files/js/generate.js" type="text/javascript"></script>
</html>