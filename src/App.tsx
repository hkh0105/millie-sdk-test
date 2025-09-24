import styled from "@emotion/styled";
import { useEffect, useState, useCallback } from "react";

// 메인 컨테이너 스타일 - 민음사 커뮤니티 스타일
const AppContainer = styled.div`
  min-height: 100vh;
  background: #f5f5f5;
  position: relative;
  overflow: hidden;
  font-family: "Noto Sans KR", -apple-system, BlinkMacSystemFont, "Segoe UI",
    Roboto, sans-serif;
`;

// 민음사 커뮤니티 배경 컨테이너
const MinumsaBackground = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 1;
  display: flex;
  flex-direction: column;
  background: #ffffff;
`;

// 민음사 커뮤니티 헤더
const MinumsaHeader = styled.header`
  background: #2e7d32;
  padding: 12px 0;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

  .container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .logo {
    font-size: 18px;
    font-weight: 500;
    color: #ffffff;
    text-decoration: none;
    display: flex;
    align-items: center;
    gap: 8px;
  }

  .nav-menu {
    display: flex;
    gap: 30px;
    align-items: center;

    a {
      color: rgba(255, 255, 255, 0.9);
      text-decoration: none;
      font-size: 14px;
      font-weight: 400;
      transition: opacity 0.2s;

      &:hover {
        opacity: 1;
      }

      &.active {
        color: #ffffff;
        font-weight: 500;
      }
    }
  }

  .user-menu {
    display: flex;
    gap: 15px;
    align-items: center;

    .user-avatar {
      width: 32px;
      height: 32px;
      border-radius: 50%;
      background: rgba(255, 255, 255, 0.2);
      display: flex;
      align-items: center;
      justify-content: center;
      color: white;
      font-size: 14px;
      font-weight: 600;
    }
  }
`;

// 민음사 커뮤니티 메인 컨텐츠
const MinumsaMainBg = styled.main`
  flex: 1;
  padding: 0;
  background: #ffffff;
  width: 100%;

  .sort-controls {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;

    select {
      padding: 8px 12px;
      border: 1px solid #e0e0e0;
      border-radius: 4px;
      font-size: 14px;
      color: #333;
    }

    .notice-toggle {
      display: flex;
      align-items: center;
      gap: 8px;
      font-size: 14px;
      color: #666;

      input[type="checkbox"] {
        width: 16px;
        height: 16px;
      }
    }
  }

  .post-list {
    background: white;
    border-radius: 8px;
    overflow: hidden;
  }

  /* 왼쪽 사이드바 */
  .sidebar-left {
    @media (max-width: 1024px) {
      display: none;
    }

    .category-card {
      background: #fff;
      border-radius: 12px;
      padding: 20px;
      box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04);
      margin-bottom: 20px;

      h3 {
        font-size: 16px;
        font-weight: 600;
        color: #212529;
        margin-bottom: 16px;
      }

      .category-list {
        .category-item {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 10px 12px;
          margin-bottom: 4px;
          border-radius: 8px;
          color: #666;
          font-size: 14px;
          cursor: pointer;
          transition: all 0.2s;

          &:hover {
            background: #f5f9fc;
            color: #446e9b;
          }

          &.active {
            background: #446e9b;
            color: white;
          }

          .count {
            background: rgba(0, 0, 0, 0.08);
            padding: 2px 8px;
            border-radius: 12px;
            font-size: 12px;
          }

          &.active .count {
            background: rgba(255, 255, 255, 0.2);
          }
        }
      }
    }
  }

  /* 메인 피드 */
  .main-feed {
    .write-post {
      background: #fff;
      border-radius: 12px;
      padding: 20px;
      box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04);
      margin-bottom: 20px;

      .write-header {
        display: flex;
        gap: 12px;
        align-items: start;

        .user-avatar {
          width: 40px;
          height: 40px;
          border-radius: 50%;
          background: linear-gradient(135deg, #446e9b 0%, #5c88c4 100%);
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          font-size: 16px;
        }

        textarea {
          flex: 1;
          border: none;
          resize: none;
          font-size: 15px;
          font-family: inherit;
          padding: 8px 0;
          outline: none;

          &::placeholder {
            color: #999;
          }
        }
      }

      .write-footer {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-top: 12px;
        padding-top: 12px;
        border-top: 1px solid #f0f0f0;

        .tools {
          display: flex;
          gap: 16px;

          button {
            background: none;
            border: none;
            color: #999;
            cursor: pointer;
            font-size: 20px;

            &:hover {
              color: #446e9b;
            }
          }
        }

        .submit-btn {
          padding: 8px 24px;
          background: #446e9b;
          color: white;
          border: none;
          border-radius: 20px;
          font-size: 14px;
          font-weight: 500;
          cursor: pointer;

          &:hover {
            background: #3a5d84;
          }
        }
      }
    }

    .post-card {
      background: #fff;
      border-radius: 12px;
      padding: 20px;
      box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04);
      margin-bottom: 20px;

      .post-header {
        display: flex;
        justify-content: space-between;
        align-items: start;
        margin-bottom: 16px;

        .post-author {
          display: flex;
          gap: 12px;

          .avatar {
            width: 48px;
            height: 48px;
            border-radius: 50%;
            background: #e0e0e0;
          }

          .author-info {
            .name {
              font-size: 15px;
              font-weight: 600;
              color: #212529;
              margin-bottom: 4px;
            }

            .time {
              font-size: 13px;
              color: #999;
            }
          }
        }

        .post-menu {
          color: #999;
          cursor: pointer;
        }
      }

      .post-content {
        font-size: 15px;
        line-height: 1.6;
        color: #333;
        margin-bottom: 16px;
      }

      .post-stats {
        display: flex;
        gap: 24px;
        padding: 12px 0;
        border-top: 1px solid #f0f0f0;
        border-bottom: 1px solid #f0f0f0;
        margin-bottom: 12px;

        .stat {
          display: flex;
          align-items: center;
          gap: 6px;
          font-size: 14px;
          color: #666;
          cursor: pointer;

          &:hover {
            color: #446e9b;
          }

          &.liked {
            color: #e74c3c;
          }
        }
      }

      .post-comments {
        .comment {
          display: flex;
          gap: 10px;
          margin-bottom: 12px;

          .comment-avatar {
            width: 32px;
            height: 32px;
            border-radius: 50%;
            background: #f0f0f0;
          }

          .comment-content {
            flex: 1;
            background: #f8f9fa;
            padding: 10px 14px;
            border-radius: 12px;

            .comment-author {
              font-size: 13px;
              font-weight: 600;
              color: #212529;
              margin-bottom: 4px;
            }

            .comment-text {
              font-size: 14px;
              color: #333;
              line-height: 1.5;
            }
          }
        }
      }
    }
  }

  /* 오른쪽 사이드바 */
  .sidebar-right {
    @media (max-width: 1024px) {
      display: none;
    }

    .trending-card {
      background: #fff;
      border-radius: 12px;
      padding: 20px;
      box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04);
      margin-bottom: 20px;

      h3 {
        font-size: 16px;
        font-weight: 600;
        color: #212529;
        margin-bottom: 16px;
      }

      .trending-list {
        .trending-item {
          display: flex;
          align-items: start;
          gap: 12px;
          margin-bottom: 16px;

          .trending-rank {
            font-size: 18px;
            font-weight: 700;
            color: #446e9b;
            width: 20px;
          }

          .trending-content {
            flex: 1;

            .trending-title {
              font-size: 14px;
              color: #212529;
              margin-bottom: 4px;
              cursor: pointer;

              &:hover {
                color: #446e9b;
              }
            }

            .trending-meta {
              font-size: 12px;
              color: #999;
            }
          }
        }
      }
    }

    .recommended-books {
      background: #fff;
      border-radius: 12px;
      padding: 20px;
      box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04);

      h3 {
        font-size: 16px;
        font-weight: 600;
        color: #212529;
        margin-bottom: 16px;
      }

      .book-list {
        .book-item {
          display: flex;
          gap: 12px;
          margin-bottom: 16px;
          cursor: pointer;

          .book-cover {
            width: 60px;
            height: 80px;
            border-radius: 4px;
            background: #f0f0f0;
            flex-shrink: 0;
          }

          .book-info {
            flex: 1;

            .book-title {
              font-size: 14px;
              font-weight: 500;
              color: #212529;
              margin-bottom: 4px;
            }

            .book-author {
              font-size: 12px;
              color: #999;
            }
          }
        }
      }
    }
  }
`;

// 민음사 스타일 푸터
const MinumsaFooter = styled.div`
  background: #f5f5f5;
  color: #666;
  padding: 20px 0;
  text-align: center;
  font-size: 12px;
  border-top: 1px solid #e0e0e0;

  .copyright {
    opacity: 0.7;
  }
`;

// 배너 스타일
const BannerSection = styled.div`
  background: #f5a9bc;
  padding: 40px 20px;
  text-align: center;
  position: relative;

  .banner-content {
    max-width: 1200px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;

    .banner-text {
      flex: 1;

      h2 {
        font-size: 28px;
        font-weight: 700;
        color: #333;
        margin-bottom: 12px;
        line-height: 1.3;
      }

      p {
        font-size: 16px;
        color: #555;
        margin-bottom: 8px;
      }
    }

    .banner-image {
      display: flex;
      gap: 20px;
      align-items: center;

      .book-icon {
        width: 80px;
        height: 100px;
        background: #333;
        border-radius: 4px;
        display: flex;
        align-items: center;
        justify-content: center;
        color: white;
        font-size: 14px;
      }
    }
  }
`;

// 카테고리 탭
const CategoryTabs = styled.div`
  background: white;
  border-bottom: 1px solid #e0e0e0;
  padding: 0 20px;

  .tabs-container {
    max-width: 1200px;
    margin: 0 auto;
    display: flex;
    gap: 30px;
    padding: 16px 0;

    .tab {
      color: #666;
      font-size: 14px;
      cursor: pointer;
      padding: 8px 12px;
      border-radius: 20px;
      transition: all 0.2s;
      background: #f5f5f5;

      &:hover {
        background: #eeeeee;
      }

      &.active {
        background: #333;
        color: white;
        font-weight: 500;
      }
    }
  }
`;

// 게시글 리스트 컨테이너
const PostListContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
`;

// 메인 콘텐츠 영역 - 투명한 오버레이로 변경
const MainContent = styled.div`
  position: relative;
  z-index: 100;
  min-height: 100vh;
  pointer-events: none;

  > * {
    pointer-events: auto;
  }
`;

// 개발용 컨트롤 패널
const DevPanel = styled.div<{ isDragging?: boolean }>`
  position: fixed;
  padding: 25px;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(20px);
  border-radius: 20px;
  box-shadow: ${(props) =>
    props.isDragging
      ? "0 30px 60px rgba(0, 0, 0, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.4)"
      : "0 20px 40px rgba(0, 0, 0, 0.15), inset 0 1px 0 rgba(255, 255, 255, 0.3)"};
  z-index: 10000;
  max-width: 350px;
  border: 2px solid rgba(255, 255, 255, 0.4);
  transition: ${(props) => (props.isDragging ? "none" : "all 0.3s ease")};
  transform: ${(props) => (props.isDragging ? "scale(1.02)" : "translateY(0)")};
  cursor: ${(props) => (props.isDragging ? "grabbing" : "grab")};

  &:hover {
    transform: ${(props) =>
      props.isDragging ? "scale(1.02)" : "translateY(-2px)"};
    box-shadow: 0 25px 50px rgba(0, 0, 0, 0.2),
      inset 0 1px 0 rgba(255, 255, 255, 0.4);
  }
`;

// 드래그 핸들
const DragHandle = styled.div`
  position: absolute;
  top: 8px;
  left: 50%;
  transform: translateX(-50%);
  width: 40px;
  height: 4px;
  background: rgba(0, 0, 0, 0.2);
  border-radius: 2px;
  cursor: grab;

  &:hover {
    background: rgba(0, 0, 0, 0.3);
  }

  &::before,
  &::after {
    content: "";
    position: absolute;
    top: 8px;
    left: 50%;
    transform: translateX(-50%);
    width: 40px;
    height: 4px;
    background: rgba(0, 0, 0, 0.2);
    border-radius: 2px;
  }

  &::after {
    top: 16px;
  }
`;

const DevTitle = styled.h3`
  color: #333;
  font-size: 16px;
  margin-bottom: 15px;
  font-weight: 700;
  text-align: center;
`;

const DevButtonGroup = styled.div`
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
  margin-bottom: 15px;
`;

const DevButton = styled.button<{
  variant?: "primary" | "secondary" | "danger";
}>`
  padding: 10px 16px;
  font-size: 13px;
  font-weight: 600;
  border: none;
  border-radius: 12px;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);

  ${(props) => {
    switch (props.variant) {
      case "danger":
        return `
          background: linear-gradient(135deg, #ff6b6b, #ee5a52);
          color: white;
          &:hover {
            background: linear-gradient(135deg, #ff5252, #e53935);
            transform: translateY(-2px);
            box-shadow: 0 6px 20px rgba(255, 107, 107, 0.4);
          }
        `;
      default:
        return `
          background: linear-gradient(135deg, #667eea, #764ba2);
          color: white;
          &:hover {
            background: linear-gradient(135deg, #5a67d8, #6b46c1);
            transform: translateY(-2px);
            box-shadow: 0 6px 20px rgba(102, 126, 234, 0.4);
          }
        `;
    }
  }}
`;

const StatusText = styled.div`
  color: #666;
  font-size: 11px;
  margin-top: 8px;
  padding: 8px;
  background: #f7fafc;
  border-radius: 4px;

  span {
    font-weight: 600;
    color: #333;
  }
`;
// const PresetSection = styled.div`
//   margin-top: 12px;
//   padding-top: 12px;
//   border-top: 1px solid #e2e8f0;
// `;

// const PresetTitle = styled.h4`
//   color: #333;
//   font-size: 12px;
//   margin-bottom: 8px;
//   font-weight: 600;
// `;

// const PresetButton = styled.button<{ isActive?: boolean }>`
//   padding: 8px 12px;
//   font-size: 11px;
//   font-weight: 500;
//   border: 1px solid ${(props) => (props.isActive ? "#667eea" : "#cbd5e0")};
//   border-radius: 4px;
//   cursor: pointer;
//   transition: all 0.2s ease;
//   background: ${(props) => (props.isActive ? "#667eea" : "white")};
//   color: ${(props) => (props.isActive ? "white" : "#4a5568")};
//   width: 100%;
//   margin-bottom: 6px;
//   text-align: left;

//   &:hover {
//     background: ${(props) => (props.isActive ? "#5a67d8" : "#f7fafc")};
//     border-color: #667eea;
//   }

//   .preset-id {
//     font-weight: 700;
//     margin-right: 6px;
//   }

//   .preset-name {
//     font-size: 10px;
//   }
// `;

// const CurrentPreset = styled.div`
//   padding: 6px 8px;
//   background: #edf2f7;
//   border-radius: 4px;
//   margin-bottom: 8px;
//   font-size: 11px;
//   color: #2d3748;

//   strong {
//     color: #667eea;
//   }
// `;
// const SpeedSection = styled.div`
//   margin-top: 12px;
//   padding-top: 12px;
//   border-top: 1px solid #e2e8f0;
// `;

// const SpeedTitle = styled.h4`
//   color: #333;
//   font-size: 12px;
//   margin-bottom: 8px;
//   font-weight: 600;
// `;

// const SpeedButton = styled.button<{ isActive?: boolean }>`
//   padding: 8px 12px;
//   font-size: 11px;
//   font-weight: 500;
//   border: 1px solid ${(props) => (props.isActive ? "#667eea" : "#cbd5e0")};
//   border-radius: 4px;
//   cursor: pointer;
//   transition: all 0.2s ease;
//   background: ${(props) => (props.isActive ? "#667eea" : "white")};
//   color: ${(props) => (props.isActive ? "white" : "#4a5568")};
//   width: 100%;
//   margin-bottom: 6px;
//   text-align: left;

//   &:hover {
//     background: ${(props) => (props.isActive ? "#5a67d8" : "#f7fafc")};
//     border-color: #667eea;
//   }

//   .speed-value {
//     font-weight: 700;
//     margin-right: 6px;
//   }

//   .speed-name {
//     font-size: 10px;
//   }
// `;

// const CurrentSpeed = styled.div`
//   padding: 6px 8px;
//   background: #edf2f7;
//   border-radius: 4px;
//   margin-bottom: 8px;
//   font-size: 11px;
//   color: #2d3748;

//   strong {
//     color: #667eea;
//   }
// `;

export default function App() {
  const [widget, setWidget] = useState<MillieChatPlugin | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [clickCount, setClickCount] = useState(0);
  const [currentCharacter, setCurrentCharacter] = useState<string | null>(null);

  // 드래그 앤 드롭 상태
  const [panelPosition, setPanelPosition] = useState({ x: 30, y: 30 });
  const [isDragging, setIsDragging] = useState(false);
  const [dragOffset, setDragOffset] = useState({ x: 0, y: 0 });
  // const [currentPresetId, setCurrentPresetId] = useState<number>(60);
  // const [currentAnimationSpeed, setCurrentAnimationSpeed] =
  //   useState<number>(500);

  // const presetOptions = [
  //   { id: 61, name: "[채팅 모델] 밀리 캐릭터 - GPT4o" },
  //   { id: 60, name: "[채팅 모델] 밀리 캐릭터 - 제미나이" },
  //   { id: 59, name: "[채팅 모델] 밀리 캐릭터 - 클로드" },
  // ];
  // const speedOptions = [
  //   { value: 0, name: "즉시 (애니메이션 없음)" },
  //   { value: 100, name: "매우 빠름" },
  //   { value: 200, name: "매우 빠름2" },
  //   { value: 300, name: "빠름" },
  //   { value: 400, name: "빠름2" },
  //   { value: 500, name: "보통 (기본)" },
  //   { value: 600, name: "보통 (기본)2" },
  //   { value: 700, name: "보통 (기본)3" },
  //   { value: 800, name: "느림" },
  //   { value: 1000, name: "느림2" },
  //   { value: 1200, name: "매우 느림" },
  // ];

  useEffect(() => {
    // SDK 초기화 예제
    // 1. ChatPlugin 인스턴스 생성
    console.log("HI");
    const plugin = new window.MillieChatSDK.MillieChatPlugin({
      // 모바일에서 전체화면 여부
      mobileFullscreen: true,
      // messageAnimationSpeed: currentAnimationSpeed,
      onChatRoomCreated: async (a, b) => {
        console.log(a, b, "챗룸생성 함수...");
      },
      onClickSendButton: async (a, b) => {
        console.log(a, b, "보내기이벤트...");
      },
      // 프로필 이미지 클릭 이벤트 핸들러
      onClickProfileImage: async (a, b) => {
        console.log(a, b, "Profile image clicked! Moving to detail page...");
        alert(
          "프로필을 클릭했습니다! 여기에 상세 페이지 이동 로직을 구현하세요."
        );
      },
    });

    // React state에 저장
    setWidget(plugin);

    console.log("✅ Chat Bot SDK 초기화 완료");

    // 컴포넌트 언마운트 시 정리
    return () => {
      plugin.destroy();
      console.log("🧹 Widget 정리 완료");
    };
  }, []);
  // const changePreset = (presetId: number) => {
  //   setCurrentPresetId(presetId);
  //   if (widget) {
  //     widget.setPresetId(presetId);
  //     console.log(`✅ Preset changed to: ${presetId}`);
  //   }
  // };

  const showLocalStorageKey = () => {
    const myKey = localStorage?.getItem("millie-session-key");
    if (!myKey) {
      return alert("키를 먼저 발급받아주세요");
    } else if (!currentCharacter) {
      return alert("이전 채팅이 없습니다.");
    } else {
      widget?.show({ sessionId: myKey, character: currentCharacter }); // 다른 캐릭터로 테스트
      setIsVisible(true);
      setClickCount((prev) => prev + 1);
    }
  };

  const showWidget = () => {
    // 새 세션 ID 생성 또는 기존 세션 사용
    const oldKey = "c5b144f8-c54f-450c-9545-57745489cf15";
    const sessionId = oldKey;

    // show 메서드에 sessionId와 characterName 전달
    widget?.show({ sessionId, character: "미들마치" });
    setIsVisible(true);
    setClickCount((prev) => prev + 1);
    console.log(
      "Widget shown with session:",
      sessionId,
      "character:",
      currentCharacter
    );
  };

  const showNewChat = (name: string) => {
    // 새로운 세션 ID 생성하여 새 채팅방 열기
    const newSessionId = MillieChatSDK.MillieChatPlugin.newSessionId();
    localStorage?.setItem("millie-session-key", newSessionId);
    localStorage?.setItem("prev-chat-caracter", name);
    setCurrentCharacter(name);
    widget?.show({ sessionId: newSessionId, character: name }); // 다른 캐릭터로 테스트
    setIsVisible(true);
    setClickCount((prev) => prev + 1);
    console.log("New chat opened with session:", newSessionId);
  };

  const hideWidget = () => {
    widget?.hide();
    setIsVisible(false);
    setClickCount((prev) => prev + 1);
    console.log("Widget hidden");
  };

  const destroyWidget = () => {
    if (widget) {
      widget.destroy();
      setWidget(null);
      setIsVisible(false);
      console.log("Widget destroyed");

      // 2초 후 재생성
      setTimeout(() => {
        const newPlugin = new MillieChatPlugin({
          position: "bottom-right",
          mobileFullscreen: true,
          characterImages: ["🤴", "👑", "💜", "🌹"],
          onChatRoomCreated: async (a, b) => {
            console.log(a, b, "챗룸생성...");
          },
          // messageAnimationSpeed: currentAnimationSpeed,
          onClickSendButton: async (a, b) => {
            console.log(a, b, "보내기이벤트...");
          },

          messageLimit: 100,
          onClickProfileImage: async (a, b) => {
            console.log(
              a,
              b,
              "Profile image clicked! Moving to detail page..."
            );
            alert("프로필을 클릭했습니다!");
          },
        });
        setWidget(newPlugin);
        console.log("✅ Chat Bot Widget 재생성 완료");
      }, 2000);
    }
  };

  // const toggleCharacter = () => {
  //   if (currentCharacter === "차선겸") {
  //     setCurrentCharacter("서리");
  //   } else {
  //     setCurrentCharacter("차선겸");
  //   }
  // };
  // const changeAnimationSpeed = (speed: number) => {
  //   setCurrentAnimationSpeed(speed);
  //   if (widget) {
  //     widget.setAnimationSpeed(speed);
  //     console.log(`✅ Animation speed changed to: ${speed}ms`);
  //   }
  // };

  useEffect(() => {
    const name = localStorage?.getItem("prev-chat-caracter");
    if (name) {
      setCurrentCharacter(name);
    }
  }, []);

  // 드래그 앤 드롭 핸들러들
  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    const rect = e.currentTarget.getBoundingClientRect();
    setDragOffset({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  const handleMouseMove = useCallback(
    (e: MouseEvent) => {
      if (!isDragging) return;

      const newX = e.clientX - dragOffset.x;
      const newY = e.clientY - dragOffset.y;

      // 화면 경계 체크
      const maxX = window.innerWidth - 350; // 패널 너비 고려
      const maxY = window.innerHeight - 200; // 패널 높이 고려

      setPanelPosition({
        x: Math.max(0, Math.min(newX, maxX)),
        y: Math.max(0, Math.min(newY, maxY)),
      });
    },
    [isDragging, dragOffset]
  );

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  useEffect(() => {
    if (isDragging) {
      document.addEventListener("mousemove", handleMouseMove);
      document.addEventListener("mouseup", handleMouseUp);
      document.body.style.cursor = "grabbing";
      document.body.style.userSelect = "none";
    } else {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseup", handleMouseUp);
      document.body.style.cursor = "";
      document.body.style.userSelect = "";
    }

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseup", handleMouseUp);
      document.body.style.cursor = "";
      document.body.style.userSelect = "";
    };
  }, [isDragging, dragOffset, handleMouseMove]);

  return (
    <AppContainer>
      {/* 민음사 스타일 배경 */}
      <MinumsaBackground>
        <MinumsaHeader>
          <div className="container">
            <a href="#" className="logo">
              민음커뮤니티
            </a>
            <div className="user-menu">
              <button
                style={{
                  background: "none",
                  border: "none",
                  color: "white",
                  fontSize: "20px",
                  cursor: "pointer",
                }}
              >
                🔔
              </button>
              <button
                style={{
                  background: "none",
                  border: "none",
                  color: "white",
                  fontSize: "20px",
                  cursor: "pointer",
                }}
              >
                ☰
              </button>
            </div>
          </div>
        </MinumsaHeader>

        <MinumsaMainBg>
          {/* 배너 섹션 */}
          <BannerSection>
            <div className="banner-content">
              <div className="banner-text">
                <p>민음사 × 동네서점</p>
                <h2>
                  동네서점 방문하고
                  <br />
                  e-스탬프 모아받요
                </h2>
                <p style={{ fontSize: "14px" }}>2025 MINUM BOOKCLUB</p>
              </div>
              <div className="banner-image">
                <div className="book-icon">BOOK</div>
                <div className="book-icon" style={{ background: "#555" }}>
                  STAMP
                </div>
              </div>
            </div>
          </BannerSection>

          {/* 카테고리 탭 */}
          <CategoryTabs>
            <div className="tabs-container">
              <div className="tab active">전체</div>
              <div className="tab">잡동산이</div>
              <div className="tab">2025 민음북클럽</div>
              <div className="tab">이벤트</div>
              <div className="tab">챌린지</div>
              <div className="tab">자유게시판</div>
              <div className="tab">정보게시판</div>
              <div className="tab">책추천</div>
              <div className="tab">후기</div>
              <div className="tab">동네서점 방문기</div>
            </div>
          </CategoryTabs>

          {/* 게시글 리스트 */}
          <PostListContainer>
            <div className="sort-controls">
              <select>
                <option>최근 글</option>
                <option>인기 글</option>
                <option>댓글 TOP</option>
              </select>
              <div className="notice-toggle">
                <span>공지글 7 감춤</span>
                <input type="checkbox" />
              </div>
            </div>

            <div className="post-list">
              {/* 공지 게시글 */}
              <div
                className="post-item"
                style={{
                  borderBottom: "1px solid #f0f0f0",
                  padding: "16px",
                  background: "#fafafa",
                }}
              >
                <div
                  style={{ display: "flex", gap: "12px", alignItems: "center" }}
                >
                  <span
                    style={{
                      background: "#ff6b6b",
                      color: "white",
                      padding: "2px 8px",
                      borderRadius: "4px",
                      fontSize: "12px",
                      fontWeight: "500",
                    }}
                  >
                    공지
                  </span>
                  <div style={{ flex: 1 }}>
                    <a
                      href="#"
                      style={{
                        color: "#333",
                        textDecoration: "none",
                        fontSize: "14px",
                        fontWeight: "500",
                      }}
                    >
                      📖 &lt;기도하는 공작 부인&gt; 에디션 독서모임 일정 변경
                      안내
                    </a>
                  </div>
                  <span style={{ fontSize: "12px", color: "#999" }}>
                    2025 민음북클럽
                  </span>
                </div>
              </div>

              <div
                className="post-item"
                style={{
                  borderBottom: "1px solid #f0f0f0",
                  padding: "16px",
                  background: "#fafafa",
                }}
              >
                <div
                  style={{ display: "flex", gap: "12px", alignItems: "center" }}
                >
                  <span
                    style={{
                      background: "#ff6b6b",
                      color: "white",
                      padding: "2px 8px",
                      borderRadius: "4px",
                      fontSize: "12px",
                      fontWeight: "500",
                    }}
                  >
                    공지
                  </span>
                  <div style={{ flex: 1 }}>
                    <a
                      href="#"
                      style={{
                        color: "#333",
                        textDecoration: "none",
                        fontSize: "14px",
                        fontWeight: "500",
                      }}
                    >
                      [이벤트/릿챌] 🌊🌊릿터 챌린지 왔다🌊🌊 - 🥰재밌는 내용을
                      소개하고 선물과 포인트 받아가자! 🎁🥰
                    </a>
                  </div>
                  <span style={{ fontSize: "12px", color: "#999" }}>
                    이벤트
                  </span>
                </div>
              </div>

              {/* 일반 게시글 */}
              <div
                className="post-item"
                style={{
                  borderBottom: "1px solid #f0f0f0",
                  padding: "16px",
                  display: "flex",
                  gap: "16px",
                }}
              >
                <div style={{ flex: 1 }}>
                  <div style={{ marginBottom: "8px" }}>
                    <span
                      style={{
                        fontSize: "12px",
                        color: "#999",
                        marginRight: "8px",
                      }}
                    >
                      챌린지
                    </span>
                    <a
                      href="#"
                      style={{
                        color: "#333",
                        textDecoration: "none",
                        fontSize: "14px",
                        fontWeight: "500",
                      }}
                    >
                      미들마치 2주차
                    </a>
                  </div>
                  <p
                    style={{
                      fontSize: "13px",
                      color: "#666",
                      margin: "8px 0",
                      lineHeight: "1.5",
                    }}
                  >
                    우선 시작은 **2주차 질문들** 1. 엘리엇은 2부의 제목 '노인과
                    청년'에 어떤 의미를 담고 싶었던 걸까요? 사실 처음엔 초반
                    리드게이트 부분이 ...
                  </p>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "16px",
                      fontSize: "12px",
                      color: "#999",
                    }}
                  >
                    <span>10분 전</span>
                    <span>미들마치 2주차</span>
                    <div
                      style={{
                        marginLeft: "auto",
                        display: "flex",
                        gap: "12px",
                        alignItems: "center",
                      }}
                    >
                      <span>찹쌀떡말랑말랑</span>
                      <span
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: "4px",
                        }}
                      >
                        ❤️ 2
                      </span>
                      <span
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: "4px",
                        }}
                      >
                        💬 2
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              <div
                className="post-item"
                style={{
                  borderBottom: "1px solid #f0f0f0",
                  padding: "16px",
                  display: "flex",
                  gap: "16px",
                }}
              >
                <div style={{ flex: 1 }}>
                  <div style={{ marginBottom: "8px" }}>
                    <span
                      style={{
                        fontSize: "12px",
                        color: "#999",
                        marginRight: "8px",
                      }}
                    >
                      이벤트
                    </span>
                    <a
                      href="#"
                      style={{
                        color: "#333",
                        textDecoration: "none",
                        fontSize: "14px",
                        fontWeight: "500",
                      }}
                    >
                      [릿챌] 54호 - 애프터눈 드라이브
                    </a>
                  </div>
                  <p
                    style={{
                      fontSize: "13px",
                      color: "#666",
                      margin: "8px 0",
                      lineHeight: "1.5",
                    }}
                  >
                    릿챌 참여!!! 비교적 최근에 읽은 54호 최예솔 작가님의
                    단편소설 '애프터눈 드라이브'가 기억에 남네.
                    유교인간(나......)이 이해하기엔 다소 자유로운 인물...
                  </p>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "16px",
                      fontSize: "12px",
                      color: "#999",
                    }}
                  >
                    <span>29분 전</span>
                    <span>릿챌</span>
                    <div
                      style={{
                        marginLeft: "auto",
                        display: "flex",
                        gap: "12px",
                        alignItems: "center",
                      }}
                    >
                      <span>그로칼랭</span>
                      <span
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: "4px",
                        }}
                      >
                        ❤️ 1
                      </span>
                      <span
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: "4px",
                        }}
                      >
                        💬 1
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              <div
                className="post-item"
                style={{
                  borderBottom: "1px solid #f0f0f0",
                  padding: "16px",
                  display: "flex",
                  gap: "16px",
                }}
              >
                <div style={{ flex: 1 }}>
                  <div style={{ marginBottom: "8px" }}>
                    <span
                      style={{
                        fontSize: "12px",
                        color: "#999",
                        marginRight: "8px",
                      }}
                    >
                      자유게시판
                    </span>
                    <a
                      href="#"
                      style={{
                        color: "#333",
                        textDecoration: "none",
                        fontSize: "14px",
                        fontWeight: "500",
                      }}
                    >
                      왜 아직도 수요일인가.....
                    </a>
                  </div>
                  <p
                    style={{
                      fontSize: "13px",
                      color: "#666",
                      margin: "8px 0",
                      lineHeight: "1.5",
                    }}
                  >
                    왜 아직도 수요일인가..... 아.. 한 주 너무 긴 것 같아. 평일
                    5일에 주말 2일인 거 한 주의 비중이 좀 말이 안되지 않아? 주
                    3.5일 희망자로서 ...
                  </p>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "16px",
                      fontSize: "12px",
                      color: "#999",
                    }}
                  >
                    <span>34분 전</span>
                    <span>일상</span>
                    <div
                      style={{
                        marginLeft: "auto",
                        display: "flex",
                        gap: "12px",
                        alignItems: "center",
                      }}
                    >
                      <span>실비아</span>
                      <span
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: "4px",
                        }}
                      >
                        ❤️ 3
                      </span>
                      <span
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: "4px",
                        }}
                      >
                        💬 4
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </PostListContainer>
        </MinumsaMainBg>

        <MinumsaFooter>
          <div className="copyright">Copyright © Minumsa Publishing Group</div>
        </MinumsaFooter>
      </MinumsaBackground>

      <MainContent>
        {/* 개발용 컨트롤 패널 */}
        <DevPanel
          isDragging={isDragging}
          style={{
            left: `${panelPosition.x}px`,
            top: `${panelPosition.y}px`,
          }}
          onMouseDown={handleMouseDown}
        >
          <DragHandle />
          <DevTitle>🛠 SDK 테스트 컨트롤</DevTitle>

          <DevButtonGroup>
            {/* <DevButton onClick={showWidget}>
              하드코딩키로 대화하기(공유 세션)
            </DevButton> */}
            <DevButton onClick={() => showNewChat("차선겸")}>
              새로 대화하기
            </DevButton>
            {currentCharacter && (
              <DevButton onClick={showLocalStorageKey}>대화 이어하기</DevButton>
            )}
            <DevButton onClick={hideWidget}>Hide</DevButton>
            {/* <DevButton onClick={toggleCharacter}>
            Toggle Character {currentCharacter}
          </DevButton> */}
            <DevButton variant="danger" onClick={destroyWidget}>
              Destroy
            </DevButton>

            {/* <PresetSection>
            <PresetTitle>🤖 Preset 선택</PresetTitle>
            <CurrentPreset>
              현재 Preset: <strong>ID {currentPresetId}</strong>
            </CurrentPreset>
            {presetOptions.map((preset) => (
              <PresetButton
                key={preset.id}
                isActive={currentPresetId === preset.id}
                onClick={() => changePreset(preset.id)}
              >
                <span className="preset-id">{preset.id}</span>
                <span className="preset-name">{preset.name}</span>
              </PresetButton>
            ))}
          </PresetSection> */}
          </DevButtonGroup>
          {/* <SpeedSection>
          <SpeedTitle>⚡ 애니메이션 속도</SpeedTitle>
          <CurrentSpeed>
            현재 속도: <strong>{currentAnimationSpeed}ms</strong>
          </CurrentSpeed>
          {speedOptions.map((speed) => (
            <SpeedButton
              key={speed.value}
              isActive={currentAnimationSpeed === speed.value}
              onClick={() => changeAnimationSpeed(speed.value)}
            >
              <span className="speed-value">{speed.value}ms</span>
              <span className="speed-name">{speed.name}</span>
            </SpeedButton>
          ))}
        </SpeedSection> */}
          <StatusText>
            초기화: <span>{widget ? "✅" : "❌"}</span> | 표시:{" "}
            <span>{isVisible ? "✅" : "❌"}</span> | 클릭:{" "}
            <span>{clickCount}</span>
          </StatusText>
        </DevPanel>
      </MainContent>
    </AppContainer>
  );
}
