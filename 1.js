$(function(){



	$(".nutthongtinlienhe button").click(function(){
  $(".lienhe").addClass("lienhe_hien");
  $(".muctieu").removeClass('muctieu_hien');
  $(".phamchat").removeClass('phamchat_hien');
  $(".kinhnghiem").removeClass('kinhnghiem_hien');
  $(".sothich").removeClass('sothich_hien');
  $(".hocvan").removeClass('hocvan_hien');
  $(".chonhocvan").removeClass('active');
  $(".chonmuctieu").removeClass('active');
  $(".chonkinhnghiem").removeClass('active');
  $(".chonthongtin").addClass('active');
  $(".chonphamchat").removeClass('active');
  $(".chonsothich").removeClass('active');
  //
  
   $(".righthocvan").removeClass('hienright');
  	 $(".rightmuctieu").removeClass('hienright');
    $(".rightlienhe").removeClass('anright');
    $(".rightkinhnghiem").removeClass('hienright');
     $(".rightphamchat").removeClass('hienright');
     $(".rightsothich").removeClass('hienright');

  });
	// 
	$(".nuthocvan button").click(function(){
  $(".hocvan").addClass("hocvan_hien");
  $(".muctieu").removeClass('muctieu_hien');
  $(".phamchat").removeClass('phamchat_hien');
  $(".kinhnghiem").removeClass('kinhnghiem_hien');
  $(".sothich").removeClass('sothich_hien');
  $(".chonhocvan").addClass('active');
  $(".chonthongtin").removeClass('active');
  $(".chonmuctieu").removeClass('active');
  $(".chonkinhnghiem").removeClass('active');
  $(".lienhe").addClass("lienhe_an");
  $(".lienhe").removeClass('lienhe_hien');
  $(".chonphamchat").removeClass('active');
  $(".chonsothich").removeClass('active');
  //
  $(".righthocvan").addClass('hienright');
   $(".rightlienhe").addClass('anright');
    $(".rightmuctieu").removeClass('hienright');
    $(".rightkinhnghiem").removeClass('hienright');
     $(".rightphamchat").removeClass('hienright');
     $(".rightsothich").removeClass('hienright');

  }); //nút học vấn

	$(".nutmuctieunghenghiep button").click(function(event) {
		$(".muctieu").addClass('muctieu_hien');
		$(".lienhe").removeClass("lienhe_hien");
		$(".phamchat").removeClass('phamchat_hien');
		$(".hocvan").removeClass("hocvan_hien");
		$(".kinhnghiem").removeClass('kinhnghiem_hien');
		$(".sothich").removeClass('sothich_hien');
		$(".chonmuctieu").addClass('active');
		$(".chonhocvan").removeClass('active');
		$(".chonkinhnghiem").removeClass('active');
		 $(".chonthongtin").removeClass('active');
		 $(".chonphamchat").removeClass('active');
		 $(".chonsothich").removeClass('active')
		 $(".lienhe").addClass("lienhe_an");

		 //
		 $(".rightmuctieu").addClass('hienright');
		 $(".righthocvan").removeClass('hienright');
  		 $(".rightlienhe").addClass('anright');
  		 $(".rightkinhnghiem").removeClass('hienright');
  		  $(".rightphamchat").removeClass('hienright');
  		  $(".rightsothich").removeClass('hienright');
	});
	$(".nutkinhnghiem").click(function(event) {
		$(".kinhnghiem").addClass('kinhnghiem_hien');
		$(".phamchat").removeClass('phamchat_hien');
		$(".muctieu").removeClass('muctieu_hien');
		$(".lienhe").removeClass("lienhe_hien");
		$(".hocvan").removeClass("hocvan_hien");
		$(".sothich").removeClass('sothich_hien');
		$(".chonkinhnghiem").addClass('active');
		$(".chonhocvan").removeClass('active');
		 $(".chonthongtin").removeClass('active');
		 $(".chonmuctieu").removeClass('active');
		 $(".chonphamchat").removeClass('active');
		 $(".chonsothich").removeClass('active')
		 $(".lienhe").addClass("lienhe_an");

		 //
		 $(".rightkinhnghiem").addClass('hienright');
		  $(".rightmuctieu").removeClass('hienright');
		 $(".righthocvan").removeClass('hienright');
  		 $(".rightlienhe").addClass('anright');
  		  $(".rightphamchat").removeClass('hienright');
  		  $(".rightsothich").removeClass('hienright');
	});
	$(".nutphamchat").click(function(event) {
		$(".phamchat").addClass('phamchat_hien');
		$(".kinhnghiem").removeClass('kinhnghiem_hien');
		$(".muctieu").removeClass('muctieu_hien');
		$(".lienhe").removeClass("lienhe_hien");
		$(".hocvan").removeClass("hocvan_hien");
		$(".sothich").removeClass('sothich_hien');
		$(".chonphamchat").addClass('active');
		$(".chonkinhnghiem").removeClass('active');
		$(".chonhocvan").removeClass('active');
		 $(".chonthongtin").removeClass('active');
		 $(".chonmuctieu").removeClass('active');
		 $(".chonsothich").removeClass('active')
		 $(".lienhe").addClass("lienhe_an");

		 //
		 $(".rightphamchat").addClass('hienright');
		  $(".rightkinhnghiem").removeClass('hienright');
		  $(".rightmuctieu").removeClass('hienright');
		 $(".righthocvan").removeClass('hienright');
  		 $(".rightlienhe").addClass('anright');
  		 $(".rightsothich").removeClass('hienright');
	});
	$(".nutsothich").click(function(event) {
		$(".sothich").addClass('sothich_hien');
			$(".lienhe").removeClass("lienhe_hien");
			$(".phamchat").removeClass('phamchat_hien');
		$(".kinhnghiem").removeClass('kinhnghiem_hien');
		$(".muctieu").removeClass('muctieu_hien');
		$(".hocvan").removeClass("hocvan_hien");
		$(".chonsothich").addClass('active');
		$(".chonphamchat").removeClass('active');
		$(".chonkinhnghiem").removeClass('active');
		$(".chonhocvan").removeClass('active');
		 $(".chonthongtin").removeClass('active');
		 $(".chonmuctieu").removeClass('active')
		 $(".lienhe").addClass("lienhe_an");
		 //
		 $(".rightsothich").addClass('hienright');
		  $(".rightphamchat").removeClass('hienright');
		  $(".rightkinhnghiem").removeClass('hienright');
		  $(".rightmuctieu").removeClass('hienright');
		 $(".righthocvan").removeClass('hienright');
  		 $(".rightlienhe").addClass('anright');
	});
});