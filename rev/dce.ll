--------DCE--------
@.g.n = global i32 zeroinitializer
define i32 @insertsort(i32* %.4){
.2:
  %.23 = alloca i32
  %.17 = alloca i32
  %.6 = alloca i32
  %.3 = alloca i32*
  store i32* %.4, i32** %.3
  store i32 1, i32* %.6
  br label %.9wc7 
.9wc7:
  %.13 = load i32, i32* %.6
  %.14 = load i32, i32* @.g.n
  %.15 = icmp slt i32 %.13, %.14
  br i1 %.15, label %.10wloop.7.20, label %.11wn20
.10wloop.7.20:
  %.18 = load i32, i32* %.6
  %.19 = load i32*, i32** %.3
  %.20 = getelementptr inbounds i32, i32* %.19, i32 %.18
  %.21 = load i32, i32* %.20
  store i32 %.21, i32* %.17
  %.24 = load i32, i32* %.6
  %.25 = sub i32 %.24, 1
  store i32 %.25, i32* %.23
  br label %.27wc13 
.11wn20:
  ret i32 0 
.27wc13:
  %.31 = load i32, i32* %.23
  %.34 = icmp sgt i32 %.31, -1
  br i1 %.34, label %.35, label %.29wn17
.28wloop.13.17:
  %.44 = load i32, i32* %.23
  %.45 = load i32*, i32** %.3
  %.46 = getelementptr inbounds i32, i32* %.45, i32 %.44
  %.47 = load i32, i32* %.46
  %.48 = load i32, i32* %.23
  %.49 = add i32 %.48, 1
  %.50 = load i32*, i32** %.3
  %.51 = getelementptr inbounds i32, i32* %.50, i32 %.49
  store i32 %.47, i32* %.51
  %.53 = load i32, i32* %.23
  %.54 = sub i32 %.53, 1
  store i32 %.54, i32* %.23
  br label %.27wc13 
.29wn17:
  %.57 = load i32, i32* %.17
  %.58 = load i32, i32* %.23
  %.59 = add i32 %.58, 1
  %.60 = load i32*, i32** %.3
  %.61 = getelementptr inbounds i32, i32* %.60, i32 %.59
  store i32 %.57, i32* %.61
  %.63 = load i32, i32* %.6
  %.64 = add i32 %.63, 1
  store i32 %.64, i32* %.6
  br label %.9wc7 
.35:
  %.37 = load i32, i32* %.17
  %.38 = load i32, i32* %.23
  %.39 = load i32*, i32** %.3
  %.40 = getelementptr inbounds i32, i32* %.39, i32 %.38
  %.41 = load i32, i32* %.40
  %.42 = icmp slt i32 %.37, %.41
  br i1 %.42, label %.28wloop.13.17, label %.29wn17
}
define i32 @main(){
.69:
  %.113 = alloca i32
  %.101 = alloca i32
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
  store i32 %.103at29, i32* %.101
  br label %.105wc30 
.105wc30:
  %.109 = load i32, i32* %.101
  %.110 = load i32, i32* @.g.n
  %.111 = icmp slt i32 %.109, %.110
  br i1 %.111, label %.106wloop.30.35, label %.107wn35
.106wloop.30.35:
  %.114 = load i32, i32* %.101
  %.115 = getelementptr inbounds [10 x i32], [10 x i32]* %.72, i32 0, i32 %.114
  %.116 = load i32, i32* %.115
  store i32 %.116, i32* %.113
  store i32 10, i32* %.113
  %.119 = load i32, i32* %.101
  %.120 = add i32 %.119, 1
  store i32 %.120, i32* %.101
  br label %.105wc30 
.107wn35:
  ret i32 0 
}
--------DCE--------
@.g.n = global i32 zeroinitializer
define i32 @insertsort(i32* %.4){
.2:
  %.23 = alloca i32
  %.17 = alloca i32
  %.6 = alloca i32
  %.3 = alloca i32*
  store i32* %.4, i32** %.3
  store i32 1, i32* %.6
  br label %.9wc7 
.9wc7:
  %.13 = load i32, i32* %.6
  %.14 = load i32, i32* @.g.n
  %.15 = icmp slt i32 %.13, %.14
  br i1 %.15, label %.10wloop.7.20, label %.11wn20
.10wloop.7.20:
  %.18 = load i32, i32* %.6
  %.19 = load i32*, i32** %.3
  %.20 = getelementptr inbounds i32, i32* %.19, i32 %.18
  %.21 = load i32, i32* %.20
  store i32 %.21, i32* %.17
  %.24 = load i32, i32* %.6
  %.25 = sub i32 %.24, 1
  store i32 %.25, i32* %.23
  br label %.27wc13 
.11wn20:
  ret i32 0 
.27wc13:
  %.31 = load i32, i32* %.23
  %.34 = icmp sgt i32 %.31, -1
  br i1 %.34, label %.35, label %.29wn17
.28wloop.13.17:
  %.44 = load i32, i32* %.23
  %.45 = load i32*, i32** %.3
  %.46 = getelementptr inbounds i32, i32* %.45, i32 %.44
  %.47 = load i32, i32* %.46
  %.48 = load i32, i32* %.23
  %.49 = add i32 %.48, 1
  %.50 = load i32*, i32** %.3
  %.51 = getelementptr inbounds i32, i32* %.50, i32 %.49
  store i32 %.47, i32* %.51
  %.53 = load i32, i32* %.23
  %.54 = sub i32 %.53, 1
  store i32 %.54, i32* %.23
  br label %.27wc13 
.29wn17:
  %.57 = load i32, i32* %.17
  %.58 = load i32, i32* %.23
  %.59 = add i32 %.58, 1
  %.60 = load i32*, i32** %.3
  %.61 = getelementptr inbounds i32, i32* %.60, i32 %.59
  store i32 %.57, i32* %.61
  %.63 = load i32, i32* %.6
  %.64 = add i32 %.63, 1
  store i32 %.64, i32* %.6
  br label %.9wc7 
.35:
  %.37 = load i32, i32* %.17
  %.38 = load i32, i32* %.23
  %.39 = load i32*, i32** %.3
  %.40 = getelementptr inbounds i32, i32* %.39, i32 %.38
  %.41 = load i32, i32* %.40
  %.42 = icmp slt i32 %.37, %.41
  br i1 %.42, label %.28wloop.13.17, label %.29wn17
}
define i32 @main(){
.69:
  %.113 = alloca i32
  %.101 = alloca i32
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
  store i32 %.103at29, i32* %.101
  br label %.105wc30 
.105wc30:
  %.109 = load i32, i32* %.101
  %.110 = load i32, i32* @.g.n
  %.111 = icmp slt i32 %.109, %.110
  br i1 %.111, label %.106wloop.30.35, label %.107wn35
.106wloop.30.35:
  %.114 = load i32, i32* %.101
  %.115 = getelementptr inbounds [10 x i32], [10 x i32]* %.72, i32 0, i32 %.114
  %.116 = load i32, i32* %.115
  store i32 %.116, i32* %.113
  store i32 10, i32* %.113
  %.119 = load i32, i32* %.101
  %.120 = add i32 %.119, 1
  store i32 %.120, i32* %.101
  br label %.105wc30 
.107wn35:
  ret i32 0 
}
@.g.n = global i32 zeroinitializer
define i32 @insertsort(i32* %.4){
.2:
  %.23 = alloca i32
  %.17 = alloca i32
  %.6 = alloca i32
  %.3 = alloca i32*
  store i32* %.4, i32** %.3
  store i32 1, i32* %.6
  br label %.9wc7 
.9wc7:
  %.13 = load i32, i32* %.6
  %.14 = load i32, i32* @.g.n
  %.15 = icmp slt i32 %.13, %.14
  br i1 %.15, label %.10wloop.7.20, label %.11wn20
.10wloop.7.20:
  %.18 = load i32, i32* %.6
  %.19 = load i32*, i32** %.3
  %.20 = getelementptr inbounds i32, i32* %.19, i32 %.18
  %.21 = load i32, i32* %.20
  store i32 %.21, i32* %.17
  %.24 = load i32, i32* %.6
  %.25 = sub i32 %.24, 1
  store i32 %.25, i32* %.23
  br label %.27wc13 
.11wn20:
  ret i32 0 
.27wc13:
  %.31 = load i32, i32* %.23
  %.34 = icmp sgt i32 %.31, -1
  br i1 %.34, label %.35, label %.29wn17
.28wloop.13.17:
  %.44 = load i32, i32* %.23
  %.45 = load i32*, i32** %.3
  %.46 = getelementptr inbounds i32, i32* %.45, i32 %.44
  %.47 = load i32, i32* %.46
  %.48 = load i32, i32* %.23
  %.49 = add i32 %.48, 1
  %.50 = load i32*, i32** %.3
  %.51 = getelementptr inbounds i32, i32* %.50, i32 %.49
  store i32 %.47, i32* %.51
  %.53 = load i32, i32* %.23
  %.54 = sub i32 %.53, 1
  store i32 %.54, i32* %.23
  br label %.27wc13 
.29wn17:
  %.57 = load i32, i32* %.17
  %.58 = load i32, i32* %.23
  %.59 = add i32 %.58, 1
  %.60 = load i32*, i32** %.3
  %.61 = getelementptr inbounds i32, i32* %.60, i32 %.59
  store i32 %.57, i32* %.61
  %.63 = load i32, i32* %.6
  %.64 = add i32 %.63, 1
  store i32 %.64, i32* %.6
  br label %.9wc7 
.35:
  %.37 = load i32, i32* %.17
  %.38 = load i32, i32* %.23
  %.39 = load i32*, i32** %.3
  %.40 = getelementptr inbounds i32, i32* %.39, i32 %.38
  %.41 = load i32, i32* %.40
  %.42 = icmp slt i32 %.37, %.41
  br i1 %.42, label %.28wloop.13.17, label %.29wn17
}
define i32 @main(){
.69:
  %.113 = alloca i32
  %.101 = alloca i32
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
  store i32 %.103at29, i32* %.101
  br label %.105wc30 
.105wc30:
  %.109 = load i32, i32* %.101
  %.110 = load i32, i32* @.g.n
  %.111 = icmp slt i32 %.109, %.110
  br i1 %.111, label %.106wloop.30.35, label %.107wn35
.106wloop.30.35:
  %.114 = load i32, i32* %.101
  %.115 = getelementptr inbounds [10 x i32], [10 x i32]* %.72, i32 0, i32 %.114
  %.116 = load i32, i32* %.115
  store i32 %.116, i32* %.113
  store i32 10, i32* %.113
  %.119 = load i32, i32* %.101
  %.120 = add i32 %.119, 1
  store i32 %.120, i32* %.101
  br label %.105wc30 
.107wn35:
  ret i32 0 
}
