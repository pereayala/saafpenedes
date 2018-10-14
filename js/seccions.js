function seccions() {
	$(function() {
		$("#infancia").click(function(){
			$('#seccions').load("seccions/infancia1.html");
			$(this).addClass('active').siblings().removeClass('active');
		});
		$("#adolescencia").click(function(){
			$('#seccions').load("seccions/adolescencia1.html");
			$(this).addClass('active').siblings().removeClass('active');
		});
		$("#joves").click(function(){
			$('#seccions').load("seccions/joves1.html");
			$(this).addClass('active').siblings().removeClass('active');
		});
		$("#paresimares").click(function(){
			$('#seccions').load("seccions/paresimares1.html");
			$(this).addClass('active').siblings().removeClass('active');
		});
		$("#nado").click(function(){
			$('#seccions').load("seccions/nado1.html");
			$(this).addClass('active').siblings().removeClass('active');
		});
		$("#grups").click(function(){
			$('#seccions').load("seccions/grups1.html");
			$(this).addClass('active').siblings().removeClass('active');
		});
		$("#galeria").click(function(){
			$('#seccions').load("seccions/galeria1.html");
			$(this).addClass('active').siblings().removeClass('active');
		});
		$("#articles").click(function(){
			$('#seccions').load("seccions/articles1.html");
			$(this).addClass('active').siblings().removeClass('active');
		});
		
	});
	
}