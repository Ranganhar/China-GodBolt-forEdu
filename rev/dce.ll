--------DCE--------
define void @printSolution(i32* %.6){
.4:
  %.5 = alloca i32*
  store i32* %.6, i32** %.5
  ret void
}
define void @printMessage(){
.10:
  ret void
}
define i32 @isSafe([4 x i32]* %.15, i32* %.18){
.13:
  %.17 = alloca i32*
  %.14 = alloca [4 x i32]*
  store [4 x i32]* %.15, [4 x i32]** %.14
  store i32* %.18, i32** %.17
  ret i32 undef 
}
define i32 @graphColoring([4 x i32]* %.25, i32 %.28, i32 %.31, i32* %.34){
.23:
  %.54 = alloca i32
  %.33 = alloca i32*
  %.30 = alloca i32
  %.27 = alloca i32
  %.24 = alloca [4 x i32]*
  store [4 x i32]* %.25, [4 x i32]** %.24
  store i32 %.28, i32* %.27
  store i32 %.31, i32* %.30
  store i32* %.34, i32** %.33
  %.38 = load i32, i32* %.30
  %.39 = icmp eq i32 %.38, 4
  br i1 %.39, label %.36, label %.37
.36:
  %.43 = load [4 x i32]*, [4 x i32]** %.24
  %.44 = load i32*, i32** %.33
  %.45at16 = call i32 @isSafe([4 x i32]* %.43, i32* %.44)
  %.47 = icmp ne i32 %.45at16, 0
  br i1 %.47, label %.41, label %.42
.37:
  store i32 1, i32* %.54
  br label %.56wc23 
.41:
  %.49 = load i32*, i32** %.33
  call void @printSolution(i32* %.49)
  ret i32 1 
.42:
  ret i32 0 
.56wc23:
  %.60 = load i32, i32* %.54
  %.61 = load i32, i32* %.27
  %.62 = icmp sle i32 %.60, %.61
  br i1 %.62, label %.57wloop.23.29, label %.58wn29
.57wloop.23.29:
  %.64 = load i32, i32* %.54
  %.65 = load i32, i32* %.30
  %.66 = load i32*, i32** %.33
  %.67 = getelementptr inbounds i32, i32* %.66, i32 %.65
  store i32 %.64, i32* %.67
  %.71 = load [4 x i32]*, [4 x i32]** %.24
  %.72 = load i32, i32* %.27
  %.73 = load i32, i32* %.30
  %.74 = add i32 %.73, 1
  %.75 = load i32*, i32** %.33
  %.76at25 = call i32 @graphColoring([4 x i32]* %.71, i32 %.72, i32 %.74, i32* %.75)
  %.77 = icmp ne i32 %.76at25, 0
  br i1 %.77, label %.69, label %.70
.58wn29:
  ret i32 0 
.69:
  ret i32 1 
.70:
  %.80 = load i32, i32* %.30
  %.81 = load i32*, i32** %.33
  %.82 = getelementptr inbounds i32, i32* %.81, i32 %.80
  store i32 0, i32* %.82
  %.84 = load i32, i32* %.54
  %.85 = add i32 %.84, 1
  store i32 %.85, i32* %.54
  br label %.56wc23 
}
define i32 @main(){
.90:
  ret i32 0 
}
--------DCE--------
define void @printSolution(i32* %.6){
.4:
  %.5 = alloca i32*
  store i32* %.6, i32** %.5
  ret void
}
define void @printMessage(){
.10:
  ret void
}
define i32 @isSafe([4 x i32]* %.15, i32* %.18){
.13:
  %.17 = alloca i32*
  %.14 = alloca [4 x i32]*
  store [4 x i32]* %.15, [4 x i32]** %.14
  store i32* %.18, i32** %.17
  ret i32 undef 
}
define i32 @graphColoring([4 x i32]* %.25, i32 %.28, i32 %.31, i32* %.34){
.23:
  %.54 = alloca i32
  %.33 = alloca i32*
  %.30 = alloca i32
  %.27 = alloca i32
  %.24 = alloca [4 x i32]*
  store [4 x i32]* %.25, [4 x i32]** %.24
  store i32 %.28, i32* %.27
  store i32 %.31, i32* %.30
  store i32* %.34, i32** %.33
  %.38 = load i32, i32* %.30
  %.39 = icmp eq i32 %.38, 4
  br i1 %.39, label %.36, label %.37
.36:
  %.43 = load [4 x i32]*, [4 x i32]** %.24
  %.44 = load i32*, i32** %.33
  %.45at16 = call i32 @isSafe([4 x i32]* %.43, i32* %.44)
  %.47 = icmp ne i32 %.45at16, 0
  br i1 %.47, label %.41, label %.42
.37:
  store i32 1, i32* %.54
  br label %.56wc23 
.41:
  %.49 = load i32*, i32** %.33
  call void @printSolution(i32* %.49)
  ret i32 1 
.42:
  ret i32 0 
.56wc23:
  %.60 = load i32, i32* %.54
  %.61 = load i32, i32* %.27
  %.62 = icmp sle i32 %.60, %.61
  br i1 %.62, label %.57wloop.23.29, label %.58wn29
.57wloop.23.29:
  %.64 = load i32, i32* %.54
  %.65 = load i32, i32* %.30
  %.66 = load i32*, i32** %.33
  %.67 = getelementptr inbounds i32, i32* %.66, i32 %.65
  store i32 %.64, i32* %.67
  %.71 = load [4 x i32]*, [4 x i32]** %.24
  %.72 = load i32, i32* %.27
  %.73 = load i32, i32* %.30
  %.74 = add i32 %.73, 1
  %.75 = load i32*, i32** %.33
  %.76at25 = call i32 @graphColoring([4 x i32]* %.71, i32 %.72, i32 %.74, i32* %.75)
  %.77 = icmp ne i32 %.76at25, 0
  br i1 %.77, label %.69, label %.70
.58wn29:
  ret i32 0 
.69:
  ret i32 1 
.70:
  %.80 = load i32, i32* %.30
  %.81 = load i32*, i32** %.33
  %.82 = getelementptr inbounds i32, i32* %.81, i32 %.80
  store i32 0, i32* %.82
  %.84 = load i32, i32* %.54
  %.85 = add i32 %.84, 1
  store i32 %.85, i32* %.54
  br label %.56wc23 
}
define i32 @main(){
.90:
  ret i32 0 
}
--------DCE--------
define void @printSolution(i32* %.6){
.4:
  %.5 = alloca i32*
  store i32* %.6, i32** %.5
  ret void
}
define void @printMessage(){
.10:
  ret void
}
define i32 @isSafe([4 x i32]* %.15, i32* %.18){
.13:
  %.17 = alloca i32*
  %.14 = alloca [4 x i32]*
  store [4 x i32]* %.15, [4 x i32]** %.14
  store i32* %.18, i32** %.17
  ret i32 undef 
}
define i32 @graphColoring([4 x i32]* %.25, i32 %.28, i32 %.31, i32* %.34){
.23:
  %.54 = alloca i32
  %.33 = alloca i32*
  %.30 = alloca i32
  %.27 = alloca i32
  %.24 = alloca [4 x i32]*
  store [4 x i32]* %.25, [4 x i32]** %.24
  store i32 %.28, i32* %.27
  store i32 %.31, i32* %.30
  store i32* %.34, i32** %.33
  %.38 = load i32, i32* %.30
  %.39 = icmp eq i32 %.38, 4
  br i1 %.39, label %.36, label %.37
.36:
  %.43 = load [4 x i32]*, [4 x i32]** %.24
  %.44 = load i32*, i32** %.33
  %.45at16 = call i32 @isSafe([4 x i32]* %.43, i32* %.44)
  %.47 = icmp ne i32 %.45at16, 0
  br i1 %.47, label %.41, label %.42
.37:
  store i32 1, i32* %.54
  br label %.56wc23 
.41:
  %.49 = load i32*, i32** %.33
  call void @printSolution(i32* %.49)
  ret i32 1 
.42:
  ret i32 0 
.56wc23:
  %.60 = load i32, i32* %.54
  %.61 = load i32, i32* %.27
  %.62 = icmp sle i32 %.60, %.61
  br i1 %.62, label %.57wloop.23.29, label %.58wn29
.57wloop.23.29:
  %.64 = load i32, i32* %.54
  %.65 = load i32, i32* %.30
  %.66 = load i32*, i32** %.33
  %.67 = getelementptr inbounds i32, i32* %.66, i32 %.65
  store i32 %.64, i32* %.67
  %.71 = load [4 x i32]*, [4 x i32]** %.24
  %.72 = load i32, i32* %.27
  %.73 = load i32, i32* %.30
  %.74 = add i32 %.73, 1
  %.75 = load i32*, i32** %.33
  %.76at25 = call i32 @graphColoring([4 x i32]* %.71, i32 %.72, i32 %.74, i32* %.75)
  %.77 = icmp ne i32 %.76at25, 0
  br i1 %.77, label %.69, label %.70
.58wn29:
  ret i32 0 
.69:
  ret i32 1 
.70:
  %.80 = load i32, i32* %.30
  %.81 = load i32*, i32** %.33
  %.82 = getelementptr inbounds i32, i32* %.81, i32 %.80
  store i32 0, i32* %.82
  %.84 = load i32, i32* %.54
  %.85 = add i32 %.84, 1
  store i32 %.85, i32* %.54
  br label %.56wc23 
}
define i32 @main(){
.90:
  ret i32 0 
}
--------DCE--------
define void @printSolution(i32* %.6){
.4:
  %.5 = alloca i32*
  store i32* %.6, i32** %.5
  ret void
}
define void @printMessage(){
.10:
  ret void
}
define i32 @isSafe([4 x i32]* %.15, i32* %.18){
.13:
  %.17 = alloca i32*
  %.14 = alloca [4 x i32]*
  store [4 x i32]* %.15, [4 x i32]** %.14
  store i32* %.18, i32** %.17
  ret i32 undef 
}
define i32 @graphColoring([4 x i32]* %.25, i32 %.28, i32 %.31, i32* %.34){
.23:
  %.54 = alloca i32
  %.33 = alloca i32*
  %.30 = alloca i32
  %.27 = alloca i32
  %.24 = alloca [4 x i32]*
  store [4 x i32]* %.25, [4 x i32]** %.24
  store i32 %.28, i32* %.27
  store i32 %.31, i32* %.30
  store i32* %.34, i32** %.33
  %.38 = load i32, i32* %.30
  %.39 = icmp eq i32 %.38, 4
  br i1 %.39, label %.36, label %.37
.36:
  %.43 = load [4 x i32]*, [4 x i32]** %.24
  %.44 = load i32*, i32** %.33
  %.45at16 = call i32 @isSafe([4 x i32]* %.43, i32* %.44)
  %.47 = icmp ne i32 %.45at16, 0
  br i1 %.47, label %.41, label %.42
.37:
  store i32 1, i32* %.54
  br label %.56wc23 
.41:
  %.49 = load i32*, i32** %.33
  call void @printSolution(i32* %.49)
  ret i32 1 
.42:
  ret i32 0 
.56wc23:
  %.60 = load i32, i32* %.54
  %.61 = load i32, i32* %.27
  %.62 = icmp sle i32 %.60, %.61
  br i1 %.62, label %.57wloop.23.29, label %.58wn29
.57wloop.23.29:
  %.64 = load i32, i32* %.54
  %.65 = load i32, i32* %.30
  %.66 = load i32*, i32** %.33
  %.67 = getelementptr inbounds i32, i32* %.66, i32 %.65
  store i32 %.64, i32* %.67
  %.71 = load [4 x i32]*, [4 x i32]** %.24
  %.72 = load i32, i32* %.27
  %.73 = load i32, i32* %.30
  %.74 = add i32 %.73, 1
  %.75 = load i32*, i32** %.33
  %.76at25 = call i32 @graphColoring([4 x i32]* %.71, i32 %.72, i32 %.74, i32* %.75)
  %.77 = icmp ne i32 %.76at25, 0
  br i1 %.77, label %.69, label %.70
.58wn29:
  ret i32 0 
.69:
  ret i32 1 
.70:
  %.80 = load i32, i32* %.30
  %.81 = load i32*, i32** %.33
  %.82 = getelementptr inbounds i32, i32* %.81, i32 %.80
  store i32 0, i32* %.82
  %.84 = load i32, i32* %.54
  %.85 = add i32 %.84, 1
  store i32 %.85, i32* %.54
  br label %.56wc23 
}
define i32 @main(){
.90:
  ret i32 0 
}
--------DCE--------
define void @printSolution(i32* %.6){
.4:
  %.5 = alloca i32*
  store i32* %.6, i32** %.5
  ret void
}
define void @printMessage(){
.10:
  ret void
}
define i32 @isSafe([4 x i32]* %.15, i32* %.18){
.13:
  %.17 = alloca i32*
  %.14 = alloca [4 x i32]*
  store [4 x i32]* %.15, [4 x i32]** %.14
  store i32* %.18, i32** %.17
  ret i32 undef 
}
define i32 @graphColoring([4 x i32]* %.25, i32 %.28, i32 %.31, i32* %.34){
.23:
  %.54 = alloca i32
  %.33 = alloca i32*
  %.30 = alloca i32
  %.27 = alloca i32
  %.24 = alloca [4 x i32]*
  store [4 x i32]* %.25, [4 x i32]** %.24
  store i32 %.28, i32* %.27
  store i32 %.31, i32* %.30
  store i32* %.34, i32** %.33
  %.38 = load i32, i32* %.30
  %.39 = icmp eq i32 %.38, 4
  br i1 %.39, label %.36, label %.37
.36:
  %.43 = load [4 x i32]*, [4 x i32]** %.24
  %.44 = load i32*, i32** %.33
  %.45at16 = call i32 @isSafe([4 x i32]* %.43, i32* %.44)
  %.47 = icmp ne i32 %.45at16, 0
  br i1 %.47, label %.41, label %.42
.37:
  store i32 1, i32* %.54
  br label %.56wc23 
.41:
  %.49 = load i32*, i32** %.33
  call void @printSolution(i32* %.49)
  ret i32 1 
.42:
  ret i32 0 
.56wc23:
  %.60 = load i32, i32* %.54
  %.61 = load i32, i32* %.27
  %.62 = icmp sle i32 %.60, %.61
  br i1 %.62, label %.57wloop.23.29, label %.58wn29
.57wloop.23.29:
  %.64 = load i32, i32* %.54
  %.65 = load i32, i32* %.30
  %.66 = load i32*, i32** %.33
  %.67 = getelementptr inbounds i32, i32* %.66, i32 %.65
  store i32 %.64, i32* %.67
  %.71 = load [4 x i32]*, [4 x i32]** %.24
  %.72 = load i32, i32* %.27
  %.73 = load i32, i32* %.30
  %.74 = add i32 %.73, 1
  %.75 = load i32*, i32** %.33
  %.76at25 = call i32 @graphColoring([4 x i32]* %.71, i32 %.72, i32 %.74, i32* %.75)
  %.77 = icmp ne i32 %.76at25, 0
  br i1 %.77, label %.69, label %.70
.58wn29:
  ret i32 0 
.69:
  ret i32 1 
.70:
  %.80 = load i32, i32* %.30
  %.81 = load i32*, i32** %.33
  %.82 = getelementptr inbounds i32, i32* %.81, i32 %.80
  store i32 0, i32* %.82
  %.84 = load i32, i32* %.54
  %.85 = add i32 %.84, 1
  store i32 %.85, i32* %.54
  br label %.56wc23 
}
define i32 @main(){
.90:
  ret i32 0 
}
define void @printSolution(i32* %.6){
.4:
  %.5 = alloca i32*
  store i32* %.6, i32** %.5
  ret void
}
define void @printMessage(){
.10:
  ret void
}
define i32 @isSafe([4 x i32]* %.15, i32* %.18){
.13:
  %.17 = alloca i32*
  %.14 = alloca [4 x i32]*
  store [4 x i32]* %.15, [4 x i32]** %.14
  store i32* %.18, i32** %.17
  ret i32 undef 
}
define i32 @graphColoring([4 x i32]* %.25, i32 %.28, i32 %.31, i32* %.34){
.23:
  %.54 = alloca i32
  %.33 = alloca i32*
  %.30 = alloca i32
  %.27 = alloca i32
  %.24 = alloca [4 x i32]*
  store [4 x i32]* %.25, [4 x i32]** %.24
  store i32 %.28, i32* %.27
  store i32 %.31, i32* %.30
  store i32* %.34, i32** %.33
  %.38 = load i32, i32* %.30
  %.39 = icmp eq i32 %.38, 4
  br i1 %.39, label %.36, label %.37
.36:
  %.43 = load [4 x i32]*, [4 x i32]** %.24
  %.44 = load i32*, i32** %.33
  %.45at16 = call i32 @isSafe([4 x i32]* %.43, i32* %.44)
  %.47 = icmp ne i32 %.45at16, 0
  br i1 %.47, label %.41, label %.42
.37:
  store i32 1, i32* %.54
  br label %.56wc23 
.41:
  %.49 = load i32*, i32** %.33
  call void @printSolution(i32* %.49)
  ret i32 1 
.42:
  ret i32 0 
.56wc23:
  %.60 = load i32, i32* %.54
  %.61 = load i32, i32* %.27
  %.62 = icmp sle i32 %.60, %.61
  br i1 %.62, label %.57wloop.23.29, label %.58wn29
.57wloop.23.29:
  %.64 = load i32, i32* %.54
  %.65 = load i32, i32* %.30
  %.66 = load i32*, i32** %.33
  %.67 = getelementptr inbounds i32, i32* %.66, i32 %.65
  store i32 %.64, i32* %.67
  %.71 = load [4 x i32]*, [4 x i32]** %.24
  %.72 = load i32, i32* %.27
  %.73 = load i32, i32* %.30
  %.74 = add i32 %.73, 1
  %.75 = load i32*, i32** %.33
  %.76at25 = call i32 @graphColoring([4 x i32]* %.71, i32 %.72, i32 %.74, i32* %.75)
  %.77 = icmp ne i32 %.76at25, 0
  br i1 %.77, label %.69, label %.70
.58wn29:
  ret i32 0 
.69:
  ret i32 1 
.70:
  %.80 = load i32, i32* %.30
  %.81 = load i32*, i32** %.33
  %.82 = getelementptr inbounds i32, i32* %.81, i32 %.80
  store i32 0, i32* %.82
  %.84 = load i32, i32* %.54
  %.85 = add i32 %.84, 1
  store i32 %.85, i32* %.54
  br label %.56wc23 
}
define i32 @main(){
.90:
  ret i32 0 
}
