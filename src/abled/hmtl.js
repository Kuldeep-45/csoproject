import React, { Component } from 'react'
import "./hmtl.css"
import img1 from "../images/food1.jpg"
import img2 from "../images/pic02.jpg"
export default class hmtl extends Component {
    render() {
        return (
            <div class="able1">
                <section id="banner">
				<div class="inner">
					<h1>Introspect: <span>A free + fully responsive<br />
					site template by TEMPLATED</span></h1>
			 		<ul class="actions">
						<li><a href="#" class="button alt">Get Started</a></li>
					</ul>
				</div>
			</section>
            <section id="one" class="white">
				<div class="inner">
					<header>
						<h2>Magna Etiam Lorem</h2>
					</header>
					<p>Suspendisse mauris. Fusce accumsan mollis eros. Pellentesque a diam sit amet mi ullamcorper vehicula. Integer adipiscin sem. Nullam quis massa sit amet nibh viverra malesuada. Nunc sem lacus, accumsan quis, faucibus non, congue vel, arcu, erisque hendrerit tellus. Integer sagittis. Vivamus a mauris eget arcu gravida tristique. Nunc iaculis mi in ante.</p>
					<ul class="actions">
						<li><a href="#" class="button alt">Learn More</a></li>
					</ul>
				</div>
			</section>
            <section id="two">
            <div class="row">
				<div class="inner">
					<article>
						<div class="content">
							<header>
								<h3 class="text-center">Pellentesque adipis</h3>
							</header>
							<div class="image125 fit3">
								<img src={img1} alt="" />
							</div>
							<p>Cumsan mollis eros. Pellentesque a diam sit amet mi magna ullamcorper vehicula. Integer adipiscin sem. Nullam quis massa sit amet lorem ipsum feugiat tempus.</p>
						</div>
					</article>
					<article class="alt">
						<div class="content">
							<header>
								<h3 class="text-center">Morbi interdum mol</h3>
							</header>
							<div class="image125 fit3">
								<img src={img2} alt="" />
							</div>
							<p>Cumsan mollis eros. Pellentesque a diam sit amet mi magna ullamcorper vehicula. Integer adipiscin sem. Nullam quis massa sit amet lorem ipsum feugiat tempus.</p>
						</div>
					</article>
                   
                    </div>
                    <div class="inner">
                
					<article>
						<div class="content">
							<header>
								<h3 class="text-center">Pellentesque adipis</h3>
							</header>
							<div class="image125 fit3">
								<img src={img1} alt="" />
							</div>
							<p>Cumsan mollis eros. Pellentesque a diam sit amet mi magna ullamcorper vehicula. Integer adipiscin sem. Nullam quis massa sit amet lorem ipsum feugiat tempus.</p>
						</div>
					</article>

					<article class="alt">
						<div class="content">
							<header>
								<h3 class="text-center">Morbi interdum mol</h3>
							</header>
							<div class="image125 fit3">
								<img src={img2} alt="" />
							</div>
							<p>Cumsan mollis eros. Pellentesque a diam sit amet mi magna ullamcorper vehicula. Integer adipiscin sem. Nullam quis massa sit amet lorem ipsum feugiat tempus.</p>
						</div>
					</article>
                    <article>
						<div class="content">
							<header>
								<h3 class="text-center">Pellentesque adipis</h3>
							</header>
							<div class="image125 fit3">
								<img src={img1} alt="" />
							</div>
							<p>Cumsan mollis eros. Pellentesque a diam sit amet mi magna ullamcorper vehicula. Integer adipiscin sem. Nullam quis massa sit amet lorem ipsum feugiat tempus.</p>
						</div>
					</article>
                    </div>
				</div>
			</section>


			<section  class="wrapper style2 white">
				<div class=" inner">
					<div class="spotlight">
						<div class="imgfood">
							<img src={img1} alt="" />
						</div>
						<div class="content">
							<h3>Ipsum pharetra tempus</h3>
							<p>Lorem ipsum nisl sed cursus magna et amet veroeros. Sed phasellus malesuada quis orci. Pellentesque eget consequat.Lorem ipsum nisl sed cursus magna et amet veroeros. Sed phasellus malesuada quis orci. Pellentesque eget consequat.Lorem ipsum nisl sed cursus magna et amet veroeros. Sed phasellus malesuada quis orci. Pellentesque eget consequat.Lorem ipsum nisl sed cursus magna et amet veroeros. Sed phasellus malesuada quis orci. Pellentesque eget consequat.</p>
							<ul class="actions">
								<li><a href="#" class="button alt">Details</a></li>
							</ul>
						</div>
					</div>
					<div class="spotlight">
						<div class="imgfood">
							<img src={img1} alt=""  />
						</div>
						<div class="content">
							<h3>Magna consequat felis</h3>
							<p>Lorem ipsum nisl sed cursus magna et amet veroeros. Sed phasellus malesuada quis orci. Pellentesque eget consequat.</p>
							<ul class="actions">
								<li><a href="#" class="button alt">Details</a></li>
							</ul>
						</div>
					</div>
					<div class="spotlight">
						<div class="imgfood">
							<img src={img1} alt="" />
						</div>
						<div class="content">
							<h3>Vitae placerat adipiscing</h3>
							<p>Lorem ipsum nisl sed cursus magna et amet veroeros. Sed phasellus malesuada quis orci. Pellentesque eget consequat.</p>
							<ul class="actions">
								<li><a href="#" class="button alt">Details</a></li>
							</ul>
						</div>
					</div>
				</div>
			</section>


			<div  class="post style1">
				<div class="image123">
					<img src={img1} alt="" />
				</div>
				<div class="content">
					<div class="inner">
						<div>
							<h2><a href="generic.html">Ipsum lorem sed magna</a></h2>
							<p class="info">3 days ago by <a href="#">Jane Doe</a></p>
						</div>
						<p>Nullam posuere erat vel placerat rutrum. Praesent ac consectetur dui, et congue quam. Donec aliquam lacinia condimentum. Integer porta massa sapien, commodo sodales diam suscipit vitae. Aliquam quis felis sed urna semper semper. Phasellus eu scelerisque mi. Vivamus aliquam nisl libero, sit amet scelerisque ligula laoreet vel.</p>
						<ul class="actions">
							<li><a href="generic.html" class="button alt">Read More</a></li>
						</ul>
					</div>
				</div>
			</div>


			<div class="post invert style1 alt">
				<div class="image123">
					<img src={img1} alt=""  />
				</div>
				<div class="content">
					<div class="inner">
						<header>
							<h2><a href="generic.html">Donec ex risus mollis</a></h2>
							<p class="info">3 days ago by <a href="#">Jane Doe</a></p>
						</header>
						<p>Nullam posuere erat vel placerat rutrum. Praesent ac consectetur dui, et congue quam. Donec aliquam lacinia condimentum. Integer porta massa sapien, commodo sodales diam suscipit vitae. Aliquam quis felis sed urna semper semper. Phasellus eu scelerisque mi. Vivamus aliquam nisl libero, sit amet scelerisque ligula laoreet vel.</p>
						<ul class="actions">
							<li><a href="generic.html" class="button alt">Read More</a></li>
						</ul>
					</div>
				</div>
			</div>
			<div class="post style2">
				<div class="image123">
					<img src={img1} alt=""  />
				</div>
				<div class="content">
					<div class="inner">
						<header>
							<h2><a href="generic.html">Sed tempus interdum</a></h2>
							<p class="info">3 days ago by <a href="#">Jane Doe</a></p>
						</header>
						<p>Nullam posuere erat vel placerat rutrum. Praesent ac consectetur dui, et congue quam. Donec aliquam lacinia condimentum. Integer porta massa sapien, commodo sodales diam suscipit vitae. Aliquam quis felis sed urna semper semper. Phasellus eu scelerisque mi. Vivamus aliquam nisl libero, sit amet scelerisque ligula laoreet vel.</p>
						<ul class="actions">
							<li><a href="generic.html" class="button alt">Read More</a></li>
						</ul>
					</div>
				</div>
			</div>
            <div  class="post style1">
				<div class="image123">
					<img src="https://etimg.etb2bimg.com/photo/76952469.cms" alt="" />
				</div>
				<div class="content">
					<div class="inner">
						<div>
							<h2><a href="www.aiims.edu">All India Institute of Medical Sciences (AIIMS), Delhi </a></h2>
							
						</div>
						<p>All India Institute of Medical Sciences (AIIMS), Delhi is one of the foremost Indian medical institutes. Established in 1956 as an Institution of National Importance by an Act of Parliament, it has secured 1st rank in NIRF 2019 in the Medical category, second time in a row. It is facilitated to offer medical and para-medical courses at undergraduate and post-graduate level owing its comprehensive facilities available for teaching, research as well as patient-care. This medical institute awards students with its own degrees across 42 disciplines and also works in collaboration with various foreign universities to further expand opportunities for joint research, student and faculty exchange programmes. </p>
						<ul class="actions">
							<li><a href="https://www.youtube.com/embed/JSvwapnNx7Q" class="button alt">Campus Tour</a></li>
						</ul>
					</div>
				</div>
			</div>
			<div  class="post style1">
				<div class="image123">
					<img src= "https://timesofindia.indiatimes.com/thumb/msid-71972258,width-1200,height-900,resizemode-4/.jpg" alt="" />
				</div>
				<div class="content">
					<div class="inner">
						<div>
							<h2><a href="generic.html"> IIT Madras </a></h2>
						</div>
						<p >Indian Institute of Technology Madras (abbreviated IIT Madras or IITM) is  a public technical and research university located in Chennai, Tamil Nadu. Founded in 1959 with technical and financial assistance from the former government of West Germany, it was the third IIT that was established by the Government of India. IIT Madras is a residential institute that occupies a 2.5-square-kilometre (0.97 sq mi) campus that was formerly part of the adjoining Guindy National Park. The institute has nearly 600 faculty, 10,000 students and 1,250 administrative and supporting staff. For  more Info <a href="https://www.iitm.ac.in/">visit here</a></p>
						<ul class="actions">
							<li><a href="https://www.youtube.com/embed/zMqjzA5Jkl8 " class="button alt">campus tour</a></li>
						</ul>
					</div>
				</div>
			</div>
            <div  class="post style1">
				<div class="image123">
					<img src= " https://timesofindia.indiatimes.com/thumb/msid-71972258,width-1200,height-900,resizemode-4/.jpg " alt="" />
				</div>
				<div class="content">
					<div class="inner">
						<div>
							<h2><a href=" https://www.iitm.ac.in/ "> IIT Madras </a></h2>
						</div>
						<p >Indian Institute of Technology Madras (abbreviated IIT Madras or IITM) is  a public technical and research university located in Chennai, Tamil Nadu. Founded in 1959 with technical and financial assistance from the former government of West Germany, it was the third IIT that was established by the Government of India. IIT Madras is a residential institute that occupies a 2.5-square-kilometre (0.97 sq mi) campus that was formerly part of the adjoining Guindy National Park. The institute has nearly 600 faculty, 10,000 students and 1,250 administrative and supporting staff. For  more Info <a href="https://www.iitm.ac.in/">visit here</a></p>
						<ul class="actions">
							<li><a href="https://www.youtube.com/embed/zMqjzA5Jkl8 " class="button alt">campus tour</a></li>
						</ul>
					</div>
				</div>
			</div>


<div class="post invert style1 alt">
				<div class="image123">
					<img src= " https://imgk.timesnownews.com/story/IIT_Delhi_6.png?tr=w-1200,h-900 "  alt=""  />
				</div>
				<div class="content">
					<div class="inner">
						<header>
							<h2><a href="  http://www.iitd.ac.in/ "> IIT Delhi </a></h2>
						</header>
						<p>Indian Institute of Technology Delhi (abbreviated IIT Delhi or IITD) is a public technical and research university located in Hauz Khas, Delhi. It is one of the 7 old IITs in India. Established in 1961, was formally inaugurated August 1961 by Prof. Humayun Kabir, Minister of Scientific Research & Cultural Affairs. The campus has an area of 320 acres (or 1.3 km²) and is bounded by the Sri Aurobindo Marg on the east, the Jawaharlal Nehru University Complex on the west, the National Council of Educational Research and Training on the south, and the New Ring Road on the north, and flanked by Qutub Minar and the Hauz Khas monuments..For  more Info <a href=" https://www.iitd.ac.in/ ">visit here</a></p>
						<ul class="actions">
							<li><a href=  " https://www.youtube.com/embed/pn23kdhFLLY "  class="button alt">campus tour</a></li>
						</ul>
					</div>
				</div>
			</div>
			<div class="red">
			<div id="pageacad" class="container row">
		    <div id="contentacad">
			<div class="titleacad">
				<h2>Welcome to our website</h2>
				<span class="byline">Mauris vulputate dolor sit amet nibh</span> </div>
			<p>This is <strong>Fetchingly</strong>, a free, fully standards-compliant CSS template designed by <a href="http://templated.co" rel="nofollow">TEMPLATED</a>. The photos in this template are from <a href="http://fotogrph.com/"> Fotogrph</a>. This free template is released under the <a href="http://templated.co/license">Creative Commons Attribution</a> license, so you're pretty much free to do whatever you want with it (even use it commercially) provided you give us credit for it. Have fun :) </p>
			<a href="#" class="button">Etiam posuere</a> </div>
		<div id="sidebaracad">
			<div id="stwo-col">
				<div class="sbox1">
					<h2>Etiam rhoncus</h2>
					<ul class="styleacad2">
						<li ><a href="#">Semper egetmi dolore</a></li>
						<li ><a href="#">Quam turpis feugiat</a></li>
						<li ><a href="#">Amet hendrerit lectus</a></li>
						<li ><a href="#">Consequat phasellus</a></li>
						<li ><a href="#">Amet turpis feugiat</a></li>
					</ul>
				</div>
				<div class="sbox2">
					<h2>Integer gravida</h2>
					<ul class="styleacad2">
						<li ><a href="#">Semper egetmi dolore</a></li>
						<li ><a href="#">Quam turpis feugiat</a></li>
						<li ><a href="#">Amet hendrerit lectus</a></li>
						<li ><a href="#">Consequat phasellus</a></li>
						<li ><a href="#">Amet turpis feugiat</a></li>
					</ul>
				</div>
			</div>
		</div>
	</div>
            </div>
			
			</div>
        )
    }
}
