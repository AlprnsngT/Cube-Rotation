
    var canvas = document.getElementById('canvas');
    gl = canvas.getContext('webgl');



    var vertices = [
   //center cube
//bottom
   -1.,-1.,-1.,
   1.,-1.,-1.,
   1., 1.,-1.,
   -1., 1.,-1.,
// front
   -1.,-1., 1.,
   1.,-1., 1.,
   1., 1.,1.,
   -1., 1., 1.,
// left
   -1,-1,-1,
   -1,1,-1,
   -1, 1,1,
   -1,-1, 1,
//right
    1.,-1.,-1.,
    1.,1.,-1.,
    1., 1.,1.,
    1.,-1., 1.,
//down
   -1.,-1.,-1.,
   -1.,-1., 1.,
   1.,-1., 1.,
   1.,-1.,-1.,
//up
   -1., 1.,-1.,
   -1., 1., 1.,
   1., 1., 1.,
   1., 1.,-1., 

       // Second Cube
   // Front face
   2.5,  0.5, 0.5,   // Vertex 24
   3.5,  0.5, 0.5,   // Vertex 25
   3.5, -0.5, 0.5,   // Vertex 26
   2.5, -0.5, 0.5,   // Vertex 27 

   // Bottom face
   2.5,  0.5, -0.5,   // Vertex 28 
   3.5,  0.5, -0.5,   // Vertex 29 
   3.5,  -0.5, -0.5,   // Vertex 30
   2.5,  -0.5, -0.5,   // Vertex 31

   // Left face
   2.5,  0.5,  0.5,  // Vertex 32 
   2.5,  0.5, -0.5,  // Vertex 33 
   2.5, -0.5,  0.5,  // Vertex 34
   2.5, -0.5, -0.5,  // Vertex 35

   // Right face
   3.5, -0.5, -0.5,  // Vertex 36 
   3.5,  0.5, -0.5,  // Vertex 37 
   3.5,  0.5,  0.5,  // Vertex 38
   3.5, -0.5,  0.5,  // Vertex 39

   // Down face
   2.5, -0.5, -0.5,  // Vertex 40 
   2.5, -0.5,  0.5,  // Vertex 41 
   3.5, -0.5, -0.5,  // Vertex 42
   3.5, -0.5,  0.5,  // Vertex 43

   // Up face
   2.5,  0.5,  0.5,  // Vertex 44   
   3.5,  0.5,  0.5,  // Vertex 45   45,46,47,
   2.5,  0.5, -0.5,  // Vertex 46
   3.5,  0.5, -0.5   // Vertex 47
   ];

    var colors = [
      // First Cube
  // bottom face
  0.0, 1.0, 1.0,  // turquise
  0.0, 1.0, 1.0,  // turquise
  0.0, 1.0, 1.0,  // turquise
  0.0, 1.0, 1.0,  // turquise

  // front face
  1.0, 0.0, 0.0,  // red
  1.0, 0.0, 0.0,  // red
  1.0, 0.0, 0.0,  // red
  1.0, 0.0, 0.0,  // red

  // Left face
  1.0, 0.0, 1.0,  // pink
  1.0, 0.0, 1.0,  // pink
  1.0, 0.0, 1.0,  // pink
  1.0, 0.0, 1.0,  // pink

  // Right face
  1.0, 1.0, 0.0,  // yellow
  1.0, 1.0, 0.0,  // yellow
  1.0, 1.0, 0.0,  // yellow
  1.0, 1.0, 0.0,  // yellow

  // Down face
  0.0, 1.0, 0.0,  // green
  0.0, 1.0, 0.0,  // green
  0.0, 1.0, 0.0,  // green
  0.0, 1.0, 0.0,   // green

  // Up face
  0.0, 0.0, 1.0,  // blue
  0.0, 0.0, 1.0,  // blue
  0.0, 0.0, 1.0,  // blue
  0.0, 0.0, 1.0,  // blue
  
   //Second Cube

  // bottom face
  1.0, 0.0, 0.0,  // red
  1.0, 0.0, 0.0,  // red
  1.0, 0.0, 0.0,  // red
  1.0, 0.0, 0.0,  // red
  // front face
  0.0, 1.0, 1.0,  // turquise
  0.0, 1.0, 1.0,  // turquise
  0.0, 1.0, 1.0,  // turquise
  0.0, 1.0, 1.0,  // turquise

  // Left face
  1.0, 0.0, 1.0,  // pink
  1.0, 0.0, 1.0,  // pink
  1.0, 0.0, 1.0,  // pink
  1.0, 0.0, 1.0,  // pink

  // Right face
  1.0, 1.0, 0.0,  // yellow
  1.0, 1.0, 0.0,  // yellow
  1.0, 1.0, 0.0,  // yellow
  1.0, 1.0, 0.0,  // yellow

  // Down face
  0.0, 1.0, 0.0,  // green
  0.0, 1.0, 0.0,  // green
  0.0, 1.0, 0.0,  // green
  0.0, 1.0, 0.0,   // green

  // Up face
  0.0, 0.0, 1.0,  // blue
  0.0, 0.0, 1.0,  // blue
  0.0, 0.0, 1.0,  // blue
  0.0, 0.0, 1.0,  // blue
  
    ];

    var indices = [
      0,1,2, 0,2,3, 4,5,6, 4,6,7,
      8,9,10, 8,10,11, 12,13,14, 12,14,15,
      16,17,18, 16,18,19, 20,21,22, 20,22,23,
      // Front face
    
   24, 25, 26,
   24, 26, 27,

   // Bottom face
   28,29,30,
   28,30,31,

   // Left face
   32,33,34,
   33,34,35,

   // Right face
   36,37,38,
   38,36,39,

   // Down face
   40,41,42,
   41,42,43,

   // Up face
   44, 45, 46,
   45, 46, 47,
    ];

    // Create and store data into vertex buffer
    var vertex_buffer = gl.createBuffer ();
    gl.bindBuffer(gl.ARRAY_BUFFER, vertex_buffer);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);

    // Create and store data into color buffer
    var color_buffer = gl.createBuffer ();
    gl.bindBuffer(gl.ARRAY_BUFFER, color_buffer);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(colors), gl.STATIC_DRAW);

    // Create and store data into index buffer
    var index_buffer = gl.createBuffer ();
    gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, index_buffer);
    gl.bufferData(gl.ELEMENT_ARRAY_BUFFER, new Uint16Array(indices), gl.STATIC_DRAW);

    /*=================== Shaders =========================*/

    var vertCode = 'attribute vec3 position;'+
       'uniform mat4 Pmatrix;'+
       'uniform mat4 Vmatrix;'+
       'uniform mat4 Mmatrix;'+
       'attribute vec3 color;'+//the color of the point
       'varying vec3 vColor;'+

       'void main(void) { '+//pre-built function
          'gl_Position = Pmatrix*Vmatrix*Mmatrix*vec4(position, 1.);'+
          'vColor = color;'+
       '}';

    var fragCode = 'precision mediump float;'+
       'varying vec3 vColor;'+
       'void main(void) {'+
          'gl_FragColor = vec4(vColor, 1);'+
       '}';

    var vertShader = gl.createShader(gl.VERTEX_SHADER);
    gl.shaderSource(vertShader, vertCode);
    gl.compileShader(vertShader);

    var fragShader = gl.createShader(gl.FRAGMENT_SHADER);
    gl.shaderSource(fragShader, fragCode);
    gl.compileShader(fragShader);

    var shaderProgram = gl.createProgram();
    gl.attachShader(shaderProgram, vertShader);
    gl.attachShader(shaderProgram, fragShader);
    gl.linkProgram(shaderProgram);

    /* ====== Associating attributes to vertex shader =====*/
    var Pmatrix = gl.getUniformLocation(shaderProgram, "Pmatrix");
    var Vmatrix = gl.getUniformLocation(shaderProgram, "Vmatrix");
    var Mmatrix = gl.getUniformLocation(shaderProgram, "Mmatrix");

    gl.bindBuffer(gl.ARRAY_BUFFER, vertex_buffer);
    var position = gl.getAttribLocation(shaderProgram, "position");
    gl.vertexAttribPointer(position, 3, gl.FLOAT, false,0,0) ;

    // Position
    gl.enableVertexAttribArray(position);
    gl.bindBuffer(gl.ARRAY_BUFFER, color_buffer);
    var color = gl.getAttribLocation(shaderProgram, "color");
    gl.vertexAttribPointer(color, 3, gl.FLOAT, false,0,0) ;

    // Color
    gl.enableVertexAttribArray(color);
    gl.useProgram(shaderProgram);

    /*==================== MATRIX =====================*/

    function get_projection(angle, a, zMin, zMax) {
       var ang = Math.tan((angle*.5)*Math.PI/180);//angle*.5
       return [
          0.5/ang, 0 , 0, 0,
          0, 0.5*a/ang, 0, 0,
          0, 0, -(zMax+zMin)/(zMax-zMin), -1,
          0, 0, (-2*zMax*zMin)/(zMax-zMin), 0 
       ];
    }

    var proj_matrix = get_projection(40, canvas.width/canvas.height, 1, 100);

    var mov_matrix = [1,0,0,0, 0,1,0,0, 0,0,1,0, 0,0,0,1];
    var view_matrix = [1,0,0,0, 0,1,0,0, 0,0,1,0, 0,0,0,1];

    // translating z
    view_matrix[14] = view_matrix[14]-6;//zoom

    /*==================== Rotation ====================*/

    function rotateZ(mov, angle) {
       var c = Math.cos(angle);
       var s = Math.sin(angle);
       var mv0 = mov[0], mv4 = mov[4], mv8 = mov[8];

       mov[0] = c*mov[0]-s*mov[1];
       mov[4] = c*mov[4]-s*mov[5];
       mov[8] = c*mov[8]-s*mov[9];

       mov[1]=c*mov[1]+s*mv0;
       mov[5]=c*mov[5]+s*mv4;
       mov[9]=c*mov[9]+s*mv8;
    }

    function rotateX(mov, angle) {
       var c = Math.cos(angle);
       var s = Math.sin(angle);
       var mv1 = mov[1], mv5 = mov[5], mv9 = mov[9];

       mov[1] = mov[1]*c-mov[2]*s;
       mov[5] = mov[5]*c-mov[6]*s;
       mov[9] = mov [9]*c-mov[10]*s;

       mov[2] = mov[2]*c+mv1*s;
       mov[6] = mov[6]*c+mv5*s;
       mov[10] = mov[10]*c+mv9*s;
    }

    function rotateY(mov, angle) {
       var c = Math.cos(angle);
       var s = Math.sin(angle);
       var mv0 = mov[0], mv4 = mov[4], mv8 = mov[8];

       mov[0] = c*mov[0]+s*mov[2];
       mov[4] = c*mov[4]+s*mov[6];
       mov[8] = c*mov[8]+s*mov[10];

       mov[2] = c*mov[2]-s*mv0;
       mov[6] = c*mov[6]-s*mv4;
       mov[10] = c*mov[10]-s*mv8;
    }
    var angleX = 0;
    var angleY = 0;
    var angleZ = 0;
    
    // rotateXAxis fonksiyonu
    function rotateXAxis() {
       angleX = 0.01; // Dönüş açısını isteğe bağlı olarak ayarlayabilirsiniz
    }
    
    // rotateYAxis fonksiyonu
    function rotateYAxis() {
       angleY = 0.01; // Dönüş açısını isteğe bağlı olarak ayarlayabilirsiniz
    }
    
    // rotateZAxis fonksiyonu
    function rotateZAxis() {
       angleZ = 0.01; // Dönüş açısını isteğe bağlı olarak ayarlayabilirsiniz
    }
    var rotationSpeed = 0; // Dönüş hızı
    function updateRotationSpeed() {
      var slider = document.getElementById("speedSlider");
      rotationSpeed = parseFloat(slider.value);
   }
    /*================= Drawing ===========================*/
    var time_old = 0;

    var animate = function(time) {

       var dt = time-time_old;
       rotateX(mov_matrix, rotationSpeed * angleX);
      rotateY(mov_matrix, rotationSpeed * angleY);
      rotateZ(mov_matrix, rotationSpeed * angleZ);
       time_old = time;

       gl.enable(gl.DEPTH_TEST);
       gl.depthFunc(gl.LEQUAL);
       gl.clearColor(0.5, 0.5, 0.5, 0.9);
       gl.clearDepth(1.0);

       gl.viewport(0.0, 0.0, canvas.width, canvas.height);
       gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);
       gl.uniformMatrix4fv(Pmatrix, false, proj_matrix);
       gl.uniformMatrix4fv(Vmatrix, false, view_matrix);
       gl.uniformMatrix4fv(Mmatrix, false, mov_matrix);
       gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, index_buffer);
       gl.drawElements(gl.TRIANGLES, indices.length, gl.UNSIGNED_SHORT, 0);

       window.requestAnimationFrame(animate);
    }
    


    animate(0);

