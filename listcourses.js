const CANVAS_TOKEN = '2006~TPQ6hGPuFe0zCjr6uKKGm9XgiFHuWiY2RkkuZG3RWYfk1AX52Gv8WmwtHSVV7cLq';

var Canvas = require('node-canvas-lms');

function cback(error, response, body)
{
  //console.log(error);
  //console.log(response);
  //console.log(body);
  for (var i in body)
  {
    console.log("id: " + body[i].id)
    console.log("name: " + body[i].name)
  }
}

//console.log(cback)

var can = new Canvas('https://mst.instructure.com',
    { token: CANVAS_TOKEN
    });

can.get('courses','',cback);
