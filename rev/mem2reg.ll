define void @printSolution(i32* %.6){
.4:
  ret void
}
define void @printMessage(){
.10:
  ret void
}
define i32 @isSafe([4 x i32]* %.15, i32* %.18){
.13:
  ret i32 undef 
}
define i32 @graphColoring([4 x i32]* %.25, i32 %.28, i32 %.31, i32* %.34){
.23:
  %.39 = icmp eq i32 %.31, 4
  br i1 %.39, label %.36, label %.37
.36:
  %.45at16 = call i32 @isSafe([4 x i32]* %.25, i32* %.34)
  %.47 = icmp ne i32 %.45at16, 0
  br i1 %.47, label %.41, label %.42
.37:
  br label %.56wc23 
.41:
  call void @printSolution(i32* %.34)
  ret i32 1 
.42:
  ret i32 0 
.56wc23:
  %.92 = phi i32 [1, %.37], [%.85, %.70]
  %.62 = icmp sle i32 %.92, %.28
  br i1 %.62, label %.57wloop.23.29, label %.58wn29
.57wloop.23.29:
  %.67 = getelementptr inbounds i32, i32* %.34, i32 %.31
  store i32 %.92, i32* %.67
  %.74 = add i32 %.31, 1
  %.76at25 = call i32 @graphColoring([4 x i32]* %.25, i32 %.28, i32 %.74, i32* %.34)
  %.77 = icmp ne i32 %.76at25, 0
  br i1 %.77, label %.69, label %.70
.58wn29:
  ret i32 0 
.69:
  ret i32 1 
.70:
  %.82 = getelementptr inbounds i32, i32* %.34, i32 %.31
  store i32 0, i32* %.82
  %.85 = add i32 %.92, 1
  br label %.56wc23 
}
define i32 @main(){
.90:
  ret i32 0 
}
