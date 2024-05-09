; ModuleID = '/home/songxingzhou/China-GodBolt-forEdu/rev/source.ll'
source_filename = "/home/songxingzhou/China-GodBolt-forEdu/rev/source_code.c"
target datalayout = "e-m:e-p:64:64-i64:64-i128:128-n64-S128"
target triple = "riscv64-unknown-unknown-elf"

; Function Attrs: nounwind
define dso_local signext i32 @test(i32* %0, i32* %1, i32 signext %2) #0 {
  %4 = icmp sgt i32 %2, 10
  br i1 %4, label %5, label %8

5:                                                ; preds = %3
  %6 = load i32, i32* %1, align 4, !tbaa !3
  %7 = add nsw i32 %2, %6
  br label %13

8:                                                ; preds = %3
  %9 = getelementptr inbounds i32, i32* %0, i64 1
  %10 = load i32, i32* %9, align 4, !tbaa !3
  %11 = add nsw i32 -2, %10
  %12 = sitofp i32 %11 to float
  br label %13

13:                                               ; preds = %8, %5
  %.0 = phi i32 [ %7, %5 ], [ -2, %8 ]
  ret i32 %.0
}

; Function Attrs: argmemonly nounwind willreturn
declare void @llvm.lifetime.start.p0i8(i64 immarg, i8* nocapture) #1

; Function Attrs: argmemonly nounwind willreturn
declare void @llvm.lifetime.end.p0i8(i64 immarg, i8* nocapture) #1

attributes #0 = { nounwind "correctly-rounded-divide-sqrt-fp-math"="false" "disable-tail-calls"="false" "frame-pointer"="none" "less-precise-fpmad"="false" "min-legal-vector-width"="0" "no-infs-fp-math"="false" "no-jump-tables"="false" "no-nans-fp-math"="false" "no-signed-zeros-fp-math"="false" "no-trapping-math"="false" "stack-protector-buffer-size"="8" "target-features"="+a,+c,+m,+relax" "unsafe-fp-math"="false" "use-soft-float"="false" }
attributes #1 = { argmemonly nounwind willreturn }

!llvm.module.flags = !{!0, !1}
!llvm.ident = !{!2}

!0 = !{i32 1, !"wchar_size", i32 4}
!1 = !{i32 1, !"target-abi", !"lp64"}
!2 = !{!"clang version 10.0.0-4ubuntu1 "}
!3 = !{!4, !4, i64 0}
!4 = !{!"int", !5, i64 0}
!5 = !{!"omnipotent char", !6, i64 0}
!6 = !{!"Simple C/C++ TBAA"}
