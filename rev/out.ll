define dso_local i32 @insertsort(int*)(i32* %a) local_unnamed_addr {
entry:
  br label %while.cond

while.cond:                                       ; preds = %while.end, %entry
  %i.0 = phi i32 [ 1, %entry ], [ %add15, %while.end ]
  %0 = load i32, i32* @n, align 4
  %cmp = icmp slt i32 %i.0, %0
  br i1 %cmp, label %while.body, label %while.end16

while.body:                                       ; preds = %while.cond
  %idxprom = zext i32 %i.0 to i64
  %arrayidx = getelementptr inbounds i32, i32* %a, i64 %idxprom
  %1 = load i32, i32* %arrayidx, align 4
  br label %while.cond1

while.cond1:                                      ; preds = %while.body6, %while.body
  %j.0.in = phi i32 [ %i.0, %while.body ], [ %j.0, %while.body6 ]
  %j.0 = add nsw i32 %j.0.in, -1
  %cmp2 = icmp sgt i32 %j.0.in, 0
  br i1 %cmp2, label %land.rhs, label %while.end

land.rhs:                                         ; preds = %while.cond1
  %idxprom3 = sext i32 %j.0 to i64
  %arrayidx4 = getelementptr inbounds i32, i32* %a, i64 %idxprom3
  %2 = load i32, i32* %arrayidx4, align 4
  %cmp5 = icmp slt i32 %1, %2
  br i1 %cmp5, label %while.body6, label %while.end

while.body6:                                      ; preds = %land.rhs
  %idxprom9 = sext i32 %j.0.in to i64
  %arrayidx10 = getelementptr inbounds i32, i32* %a, i64 %idxprom9
  store i32 %2, i32* %arrayidx10, align 4
  br label %while.cond1

while.end:                                        ; preds = %while.cond1, %land.rhs
  %idxprom13 = sext i32 %j.0.in to i64
  %arrayidx14 = getelementptr inbounds i32, i32* %a, i64 %idxprom13
  store i32 %1, i32* %arrayidx14, align 4
  %add15 = add nuw nsw i32 %i.0, 1
  br label %while.cond

while.end16:                                      ; preds = %while.cond
  ret i32 0
}