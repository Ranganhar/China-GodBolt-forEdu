; ModuleID = '/home/songxingzhou/China-GodBolt-forEdu/rev/source_code.c'
source_filename = "/home/songxingzhou/China-GodBolt-forEdu/rev/source_code.c"
target datalayout = "e-m:e-p270:32:32-p271:32:32-p272:64:64-i64:64-f80:128-n8:16:32:64-S128"
target triple = "x86_64-pc-linux-gnu"

; Function Attrs: nounwind uwtable
define dso_local i32 @func(i32* %0, i32* %1, i32 %2) #0 {
  %4 = alloca i32*, align 8
  %5 = alloca i32*, align 8
  %6 = alloca i32, align 4
  %7 = alloca float, align 4
  %8 = alloca i32, align 4
  store i32* %0, i32** %4, align 8, !tbaa !2
  store i32* %1, i32** %5, align 8, !tbaa !2
  store i32 %2, i32* %6, align 4, !tbaa !6
  %9 = bitcast float* %7 to i8*
  call void @llvm.lifetime.start.p0i8(i64 4, i8* %9) #2
  store float 0x4002666660000000, float* %7, align 4, !tbaa !8
  %10 = bitcast i32* %8 to i8*
  call void @llvm.lifetime.start.p0i8(i64 4, i8* %10) #2
  store i32 3, i32* %8, align 4, !tbaa !6
  %11 = load i32, i32* %6, align 4, !tbaa !6
  %12 = icmp sgt i32 %11, 10
  br i1 %12, label %13, label %19

13:                                               ; preds = %3
  %14 = load i32, i32* %6, align 4, !tbaa !6
  %15 = load i32*, i32** %5, align 8, !tbaa !2
  %16 = getelementptr inbounds i32, i32* %15, i64 0
  %17 = load i32, i32* %16, align 4, !tbaa !6
  %18 = add nsw i32 %14, %17
  store i32 %18, i32* %8, align 4, !tbaa !6
  br label %28

19:                                               ; preds = %3
  %20 = load i32, i32* %8, align 4, !tbaa !6
  %21 = sub nsw i32 0, %20
  store i32 %21, i32* %8, align 4, !tbaa !6
  %22 = load i32, i32* %8, align 4, !tbaa !6
  %23 = load i32*, i32** %4, align 8, !tbaa !2
  %24 = getelementptr inbounds i32, i32* %23, i64 1
  %25 = load i32, i32* %24, align 4, !tbaa !6
  %26 = add nsw i32 %22, %25
  %27 = sitofp i32 %26 to float
  store float %27, float* %7, align 4, !tbaa !8
  br label %28

28:                                               ; preds = %19, %13
  %29 = load i32, i32* %8, align 4, !tbaa !6
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

; Function Attrs: nounwind uwtable
define dso_local i32 @main() #0 {
  %1 = alloca i32, align 4
  store i32 0, i32* %1, align 4
  ret i32 1
}

attributes #0 = { nounwind uwtable "correctly-rounded-divide-sqrt-fp-math"="false" "disable-tail-calls"="false" "frame-pointer"="none" "less-precise-fpmad"="false" "min-legal-vector-width"="0" "no-infs-fp-math"="false" "no-jump-tables"="false" "no-nans-fp-math"="false" "no-signed-zeros-fp-math"="false" "no-trapping-math"="false" "stack-protector-buffer-size"="8" "target-cpu"="x86-64" "target-features"="+cx8,+fxsr,+mmx,+sse,+sse2,+x87" "unsafe-fp-math"="false" "use-soft-float"="false" }
attributes #1 = { argmemonly nounwind willreturn }
attributes #2 = { nounwind }

!llvm.module.flags = !{!0}
!llvm.ident = !{!1}

!0 = !{i32 1, !"wchar_size", i32 4}
!1 = !{!"clang version 10.0.0-4ubuntu1 "}
!2 = !{!3, !3, i64 0}
!3 = !{!"any pointer", !4, i64 0}
!4 = !{!"omnipotent char", !5, i64 0}
!5 = !{!"Simple C/C++ TBAA"}
!6 = !{!7, !7, i64 0}
!7 = !{!"int", !4, i64 0}
!8 = !{!9, !9, i64 0}
!9 = !{!"float", !4, i64 0}
