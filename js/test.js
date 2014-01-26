<html>
<head>
<script type="text/javascript" src="../js/jquery-1.7.2.min" tppabs="http://www.w3school.com.cn/jquery/jquery.js"></script>
<script type="text/javascript">
$(document).ready(function(){
  $("input").focus(function(){
    $("input").css("background-color","#FFFFCC");
  });
  $("input").blur(function(){
    $("input").css("background-color","#D6D6FF");
  });
});
</script>
</head>
<body>
Enter your name: <input type="text" />
<p>请在上面的输入域中点击，使其获得焦点，然后在输入域外面点击，使其失去焦点。</p>
</body>
</html>
