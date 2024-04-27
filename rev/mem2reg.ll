@.g.n = global i32 zeroinitializer
define i32 @insertsort(i32* %.4){
.2:
  br label %.9wc7 
.9wc7:
  %.125 = phi i32 [1, %.2], [%.64, %.29wn17]
  %.14 = load i32, i32* @.g.n
  %.15 = icmp slt i32 %.125, %.14
  br i1 %.15, label %.10wloop.7.20, label %.11wn20
.10wloop.7.20:
  %.20 = getelementptr inbounds i32, i32* %.4, i32 %.125
  %.21 = load i32, i32* %.20
  %.25 = sub i32 %.125, 1
  br label %.27wc13 
.11wn20:
  ret i32 0 
.27wc13:
  %.124 = phi i32 [%.25, %.10wloop.7.20], [%.54, %.28wloop.13.17]
  %.34 = icmp sgt i32 %.124, -1
  br i1 %.34, label %.35, label %.29wn17
.28wloop.13.17:
  %.46 = getelementptr inbounds i32, i32* %.4, i32 %.124
  %.47 = load i32, i32* %.46
  %.49 = add i32 %.124, 1
  %.51 = getelementptr inbounds i32, i32* %.4, i32 %.49
  store i32 %.47, i32* %.51
  %.54 = sub i32 %.124, 1
  br label %.27wc13 
.29wn17:
  %.59 = add i32 %.124, 1
  %.61 = getelementptr inbounds i32, i32* %.4, i32 %.59
  store i32 %.21, i32* %.61
  %.64 = add i32 %.125, 1
  br label %.9wc7 
.35:
  %.40 = getelementptr inbounds i32, i32* %.4, i32 %.124
  %.41 = load i32, i32* %.40
  %.42 = icmp slt i32 %.21, %.41
  br i1 %.42, label %.28wloop.13.17, label %.29wn17
}
define i32 @main(){
.69:
  %.72 = alloca [10 x i32]
  store i32 10, i32* @.g.n
  %.74 = getelementptr inbounds [10 x i32], [10 x i32]* %.72, i32 0, i32 0
  store i32 4, i32* %.74
  %.77 = getelementptr inbounds [10 x i32], [10 x i32]* %.72, i32 0, i32 1
  store i32 3, i32* %.77
  %.81 = getelementptr inbounds [10 x i32], [10 x i32]* %.72, i32 0, i32 2
  store i32 9, i32* %.81
  %.83 = getelementptr inbounds [10 x i32], [10 x i32]* %.72, i32 0, i32 3
  store i32 2, i32* %.83
  %.85 = getelementptr inbounds [10 x i32], [10 x i32]* %.72, i32 0, i32 4
  store i32 0, i32* %.85
  %.88 = getelementptr inbounds [10 x i32], [10 x i32]* %.72, i32 0, i32 5
  store i32 1, i32* %.88
  %.91 = getelementptr inbounds [10 x i32], [10 x i32]* %.72, i32 0, i32 6
  store i32 6, i32* %.91
  %.94 = getelementptr inbounds [10 x i32], [10 x i32]* %.72, i32 0, i32 7
  store i32 5, i32* %.94
  %.97 = getelementptr inbounds [10 x i32], [10 x i32]* %.72, i32 0, i32 8
  store i32 7, i32* %.97
  %.99 = getelementptr inbounds [10 x i32], [10 x i32]* %.72, i32 0, i32 9
  store i32 8, i32* %.99
  %.102 = getelementptr inbounds [10 x i32], [10 x i32]* %.72, i32 0, i32 0
  %.103at29 = call i32 @insertsort(i32* %.102)
  br label %.105wc30 
.105wc30:
  %.127 = phi i32 [%.103at29, %.69], [%.120, %.106wloop.30.35]
  %.110 = load i32, i32* @.g.n
  %.111 = icmp slt i32 %.127, %.110
  br i1 %.111, label %.106wloop.30.35, label %.107wn35
.106wloop.30.35:
  %.115 = getelementptr inbounds [10 x i32], [10 x i32]* %.72, i32 0, i32 %.127
  %.116 = load i32, i32* %.115
  %.120 = add i32 %.127, 1
  br label %.105wc30 
.107wn35:
  ret i32 0 
}
