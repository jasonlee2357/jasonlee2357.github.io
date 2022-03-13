<?php
   if(isset($_FILES['file1'])){
      $errors = array();
      $file_name = $_FILES['file1']['name'];
      $file_size =$_FILES['file1']['size'];
      $file_tmp = $_FILES['file1']['tmp_name']; 
      $file_type = $_FILES['file1']['type'];

      $s1 = explode('.',$file_name); 
      $s2 = end($s1);
      $file_ext = strtolower($s2);
      $mid = $_POST['mid'];
      $album = $_POST['album'];

      $extensions = array("json");
      
      if(in_array($file_ext,$extensions)=== false){
         $errors[] = "extension not allowed, please choose a json file.";
      }
      
      if($file_size > 10485760){
         $errors[] = "File size must be excately 10 MB";
      }
      
      if(empty($errors)==true){
         echo $file_name." ... ";
         move_uploaded_file($file_tmp, "data/".$album.".".$file_ext);
         echo "Success<br>";
         echo "<script> top.getJSON('"."data/".$album.".".$file_ext."'); </script>";
      } else {
         echo "<script> top.alert('".$errors."'); </script>";
      }
   }
?>
