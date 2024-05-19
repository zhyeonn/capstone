import React, { useState } from "react";
import "./MyPage.css";
import NavbarWithoutUl from "./NavbarWithoutUl";
import Notice from "./myPageMenu/notice/Notice";
import Board from "./myPageMenu/board/Board";
import ChangePassword from "./myPageMenu/changePassword/ChangePassword";
import Calendar from "./calendar/Calendar";
import Calculator from "./myPageMenu/calculator/Calculator";
import Footer from "./Footer";
import NoticeContents from "./myPageMenu/notice/NoticeContents";
import BoardContents from "./myPageMenu/board/BoardContents";
import InfoChange from "./myPageMenu/infoChange/InfoChange";

const MyPage = () => {
  const [changeComponent, setChangeComponent] = useState("");

  return (
    <div>
      <NavbarWithoutUl />
      <div>
        <div className="myPageWrap">
          <div className="pageTitle">
            {changeComponent === "changePassword" && (
              <div>비밀번호 변경하기</div>
            )}
            {changeComponent === "infoChange" && <div>회원 정보 수정</div>}
            {changeComponent === "calendar" && <div>캘린더 보러가기</div>}
            {changeComponent === "timeTable" && <div>시간표 보러가기</div>}
            {changeComponent === "calculator" && <div>학점 계산기</div>}
            {changeComponent === "notice" && <div>공지사항</div>}
            {changeComponent === "noticeContents" && <div>공지사항</div>}
            {changeComponent === "board" && <div>자유게시판</div>}
            {changeComponent === "boardContents" && <div>자유게시판</div>}
          </div>
          <div>
            <hr className="rowHr" />
          </div>
          <div className="myPageContents">
            <div className="myPageBoard">
              <div className="myPage">
                <div className="myPageBoardTitle">마이페이지</div>
                <button
                  className={
                    changeComponent === "infoChange"
                      ? "thisPage"
                      : "myPageBoardMenu"
                  }
                  onClick={() => setChangeComponent("infoChange")}
                >
                  회원 정보 수정
                </button>
                <button
                  className={
                    changeComponent === "changePassword"
                      ? "thisPage"
                      : "myPageBoardMenu"
                  }
                  onClick={() => setChangeComponent("changePassword")}
                >
                  비밀번호 변경하기
                </button>
                <button
                  className={
                    changeComponent === "calendar"
                      ? "thisPage"
                      : "myPageBoardMenu"
                  }
                  onClick={() => setChangeComponent("calendar")}
                >
                  캘린더 보러가기
                </button>
                <button
                  className={
                    changeComponent === "timeTable"
                      ? "thisPage"
                      : "myPageBoardMenu"
                  }
                  onClick={() => setChangeComponent("timeTable")}
                >
                  시간표 보러가기
                </button>
                <button
                  className={
                    changeComponent === "calculator"
                      ? "thisPage"
                      : "myPageBoardMenu"
                  }
                  onClick={() => setChangeComponent("calculator")}
                >
                  학점 계산기
                </button>
              </div>
              <div className="board">
                <div className="myPageBoardTitle">게시판</div>
                <button
                  className={
                    changeComponent === "notice"
                      ? "thisPage"
                      : "myPageBoardMenu"
                  }
                  onClick={() => setChangeComponent("notice")}
                >
                  공지사항
                </button>
                <button
                  className={
                    changeComponent === "board" ? "thisPage" : "myPageBoardMenu"
                  }
                  onClick={() => setChangeComponent("board")}
                >
                  자유게시판
                </button>
              </div>
            </div>
            <div className="linePage">
              <div className="line"></div>
              <div className="myPageMenuWrap">
                <div className="myPageMenu">
                  {changeComponent === "infoChange" && <InfoChange />}
                  {changeComponent === "changePassword" && <ChangePassword />}
                  {changeComponent === "calendar" && <Calendar />}
                  {/* {changeComponent === "timeTable" && <TimeTable />} */}
                  {changeComponent === "calculator" && <Calculator />}
                  {changeComponent === "notice" && <Notice />}
                  {changeComponent === "noticeContents" && <NoticeContents />}
                  {changeComponent === "board" && <Board />}
                  {changeComponent === "boardContents" && <BoardContents />}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="myPageFooter">
        <Footer />
      </div>
    </div>
  );
};

export default MyPage;
