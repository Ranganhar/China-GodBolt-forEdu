; ModuleID = '/home/songxingzhou/China-GodBolt-forEdu/rev/source_code.c'
source_filename = "/home/songxingzhou/China-GodBolt-forEdu/rev/source_code.c"
target datalayout = "e-m:e-p:64:64-i64:64-i128:128-n64-S128"
target triple = "riscv64-unknown-unknown-elf"

; Function Attrs: nounwind
define dso_local signext i32 @test(i32* %0, i32* %1, i32 signext %2) #0 {
  %4 = alloca i32*, align 8
  %5 = alloca i32*, align 8
  %6 = alloca i32, align 4
  %7 = alloca float, align 4
  %8 = alloca i32, align 4
  store i32* %0, i32** %4, align 8, !tbaa !3
  store i32* %1, i32** %5, align 8, !tbaa !3
  store i32 %2, i32* %6, align 4, !tbaa !7
  %9 = bitcast float* %7 to i8*
  call void @llvm.lifetime.start.p0i8(i64 4, i8* %9) #2
  store float 0x4002666660000000, float* %7, align 4, !tbaa !9
  %10 = bitcast i32* %8 to i8*
  call void @llvm.lifetime.start.p0i8(i64 4, i8* %10) #2
  store i32 2, i32* %8, align 4, !tbaa !7
  %11 = load i32, i32* %6, align 4, !tbaa !7
  %12 = icmp sgt i32 %11, 10
  br i1 %12, label %13, label %19

13:                                               ; preds = %3
  %14 = load i32, i32* %6, align 4, !tbaa !7
  %15 = load i32*, i32** %5, align 8, !tbaa !3
  %16 = getelementptr inbounds i32, i32* %15, i64 0
  %17 = load i32, i32* %16, align 4, !tbaa !7
  %18 = add nsw i32 %14, %17
  store i32 %18, i32* %8, align 4, !tbaa !7
  br label %28

19:                                               ; preds = %3
  %20 = load i32, i32* %8, align 4, !tbaa !7
  %21 = sub nsw i32 0, %20
  store i32 %21, i32* %8, align 4, !tbaa !7
  %22 = load i32, i32* %8, align 4, !tbaa !7
  %23 = load i32*, i32** %4, align 8, !tbaa !3
  %24 = getelementptr inbounds i32, i32* %23, i64 1
  %25 = load i32, i32* %24, align 4, !tbaa !7
  %26 = add nsw i32 %22, %25
  %27 = sitofp i32 %26 to float
  store float %27, float* %7, align 4, !tbaa !9
  br label %28

28:                                               ; preds = %19, %13
  %29 = load i32, i32* %8, align 4, !tbaa !7
  %30 = bitcast i32* %8 to i8*
  call void @llvm.lifetime.end.p0i8(i64 4, i8* %30) #2
  %31 = bitcast float* %7 to i8*
  call void @llvm.lifetime.end.p0i8(i64 4, i8* %31) #2
  ret i32 %29
}

; Function Attrs: argmemonly nounwind willreturn
declare void @llvm.lifetime.start.p0i8(i64 immarg, i8* nocapture) #1

; Function Attrs: argmemonly nounwind willreturn
declare void @llvm.lifetime.end.p0i8(i64 immarg, i8* nocapture) #1

attributes #0 = { nounwind "correctly-rounded-divide-sqrt-fp-math"="false" "disable-tail-calls"="false" "frame-pointer"="none" "less-precise-fpmad"="false" "min-legal-vector-width"="0" "no-infs-fp-math"="false" "no-jump-tables"="false" "no-nans-fp-math"="false" "no-signed-zeros-fp-math"="false" "no-trapping-math"="false" "stack-protector-buffer-size"="8" "target-features"="+a,+c,+m,+relax" "unsafe-fp-math"="false" "use-soft-float"="false" }
attributes #1 = { argmemonly nounwind willreturn }
attributes #2 = { nounwind }

!llvm.module.flags = !{!0, !1}
!llvm.ident = !{!2}

!0 = !{i32 1, !"wchar_size", i32 4}
!1 = !{i32 1, !"target-abi", !"lp64"}
!2 = !{!"clang version 10.0.0-4ubuntu1 "}
!3 = !{!4, !4, i64 0}
!4 = !{!"any pointer", !5, i64 0}
!5 = !{!"omnipotent char", !6, i64 0}
!6 = !{!"Simple C/C++ TBAA"}
!7 = !{!8, !8, i64 0}
!8 = !{!"int", !5, i64 0}
!9 = !{!10, !10, i64 0}
!10 = !{!"float", !5, i64 0}
