		//Gör variaber för det som ska ritas
		var boxSize = {X:200, Y:200};
		var dataArray = [];
		dataArray.push([50, 50, 50, 50, "#ff0000"]);
		//Sätt målet för ritningen i myCanvas och initialisera ctx
		var c=document.getElementById("myCanvas");
		var ctx=c.getContext("2d");
		ctx.canvas.width  = boxSize.X;
		ctx.canvas.height = boxSize.Y;
		//Rita boxen
		ctx.fillStyle="#fcfcfc";
		ctx.fillRect(0 ,0 , boxSize.X, boxSize.Y);
		ctx.strokeStyle="#000000"
		ctx.lineWidth=2;
		ctx.strokeRect(0 ,0 , boxSize.X, boxSize.Y);
		//Rita Rutnät
		ctx.strokeStyle="#cccccc";
		ctx.lineWidth=1;
	    for (var i = 1; i < 10; i++){
			ctx.beginPath();
			ctx.moveTo(i*(boxSize.X/10), 0);
			ctx.lineTo(i*(boxSize.X/10), boxSize.Y);
			ctx.stroke();
		}
	    for (var i = 1; i < 10; i++){
			ctx.beginPath();
			ctx.moveTo(0, i*(boxSize.Y/10));
			ctx.lineTo(boxSize.X, i*(boxSize.Y/10));
			ctx.stroke();
		}
		//Rita grafer
		ctx.lineWidth=3;		
        for (var i = 0; i < dataArray.length; i++){
			ctx.beginPath();
			ctx.moveTo(0, ((dataArray[i][0])/100)*boxSize.Y);
			ctx.lineTo(1*(boxSize.X/3), ((dataArray[i][1])/100)*boxSize.Y);
			ctx.lineTo(2*(boxSize.X/3), ((dataArray[i][2])/100)*boxSize.Y);
			ctx.lineTo(3*(boxSize.X/3), ((dataArray[i][3])/100)*boxSize.Y);
			ctx.strokeStyle=dataArray[i][4];
			ctx.stroke();
		}