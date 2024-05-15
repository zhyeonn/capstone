import React from "react";
import "./InfoChange.css";

const InfoChange = () => {
  return (
    <div>
      <div className="infoChangeWrap">
        <div className="infoChange">
          <div className="infoChangeHeader">회원 정보 수정</div>
          <div className="infoChangeContentsWrap">
            <div className="infoChangeContents">
              <label className="infoChangeLabel">이름</label>
              <input className="infoChangeInput" />
            </div>
            <div className="infoChangeContents">
              <label className="infoChangeLabel">전화번호</label>
              <input className="infoChangeInput" />
            </div>
            <div className="infoChangeContents">
              <label className="infoChangeLabel">이메일</label>
              <input className="infoChangeInput" />
            </div>
          </div>
          <div className="infoChangeButtonWrap">
            <button className="infoChangeButton">수정하기</button>
            <button className="infoChangeCancleButton">취소하기</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InfoChange;
