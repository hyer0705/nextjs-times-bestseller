"use client";

import { useEffect } from "react";

export default function Error({ error, reset }) {
  useEffect(() => {
    console.error(error);
  }, [error]);
  return (
    <div className="paper container">
      <h3>책 목록을 찾을 수 없습니다.</h3>
    </div>
  );
}
