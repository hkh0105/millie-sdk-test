import styled from "@emotion/styled";
import { useEffect, useState, useCallback } from "react";

// 메인 컨테이너 스타일
const AppContainer = styled.div`
  min-height: 100vh;
  background: linear-gradient(
    135deg,
    #1e3c72 0%,
    #2a5298 25%,
    #667eea 50%,
    #764ba2 75%,
    #f093fb 100%
  );
  position: relative;
  overflow: hidden;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: radial-gradient(
        circle at 20% 80%,
        rgba(120, 119, 198, 0.3) 0%,
        transparent 50%
      ),
      radial-gradient(
        circle at 80% 20%,
        rgba(255, 119, 198, 0.3) 0%,
        transparent 50%
      ),
      radial-gradient(
        circle at 40% 40%,
        rgba(120, 219, 255, 0.2) 0%,
        transparent 50%
      );
    animation: backgroundShift 20s ease-in-out infinite;
  }

  @keyframes backgroundShift {
    0%,
    100% {
      opacity: 1;
    }
    50% {
      opacity: 0.8;
    }
  }
`;

// 배경 애니메이션 요소들
const FloatingElement = styled.div<{
  size: string;
  top: string;
  left: string;
  animationDelay: string;
  color: string;
}>`
  position: absolute;
  width: ${(props) => props.size};
  height: ${(props) => props.size};
  background: linear-gradient(
    45deg,
    ${(props) => props.color},
    rgba(255, 255, 255, 0.1)
  );
  border-radius: 50%;
  opacity: 0.15;
  animation: float 8s ease-in-out infinite;
  animation-delay: ${(props) => props.animationDelay};
  box-shadow: 0 0 20px ${(props) => props.color}40,
    inset 0 0 20px rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(1px);

  @keyframes float {
    0% {
      transform: translateY(0px) rotate(0deg) scale(1);
    }
    25% {
      transform: translateY(-30px) rotate(90deg) scale(1.1);
    }
    50% {
      transform: translateY(-20px) rotate(180deg) scale(0.9);
    }
    75% {
      transform: translateY(-40px) rotate(270deg) scale(1.05);
    }
    100% {
      transform: translateY(0px) rotate(360deg) scale(1);
    }
  }
`;

// 메인 콘텐츠 영역
const MainContent = styled.div`
  position: relative;
  z-index: 10;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;

// 헤더 섹션
const HeaderSection = styled.div`
  text-align: center;
  padding: 80px 20px 60px;
  color: white;
`;

const MainTitle = styled.h1`
  font-size: 4.5rem;
  font-weight: 800;
  margin-bottom: 30px;
  text-shadow: 0 8px 16px rgba(0, 0, 0, 0.3);
  background: linear-gradient(135deg, #fff 0%, #f0f8ff 50%, #e6f3ff 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  animation: titleGlow 3s ease-in-out infinite alternate;

  @keyframes titleGlow {
    0% {
      filter: brightness(1);
    }
    100% {
      filter: brightness(1.2);
    }
  }
`;

const SubTitle = styled.p`
  font-size: 1.5rem;
  opacity: 0.95;
  margin-bottom: 40px;
  font-weight: 400;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
`;

const DescriptionCard = styled.div`
  background: rgba(255, 255, 255, 0.15);
  backdrop-filter: blur(20px);
  border-radius: 24px;
  padding: 40px;
  margin: 0 auto;
  max-width: 700px;
  border: 2px solid rgba(255, 255, 255, 0.3);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1),
    inset 0 1px 0 rgba(255, 255, 255, 0.2);
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 30px 60px rgba(0, 0, 0, 0.15),
      inset 0 1px 0 rgba(255, 255, 255, 0.3);
  }
`;

const DescriptionText = styled.p`
  color: white;
  font-size: 1.2rem;
  line-height: 1.8;
  margin: 0;
  text-align: center;
  font-weight: 300;
`;

// 메인 콘텐츠 래퍼
const ContentWrapper = styled.div`
  flex: 1;
  flex-direction: column;
  position: relative;
  z-index: 5;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 80px 20px;
`;

// 코드 블록 스타일
const CodeBlock = styled.div`
  background: rgba(0, 0, 0, 0.4);
  backdrop-filter: blur(15px);
  border-radius: 20px;
  padding: 40px;
  margin: 60px 0;
  border: 2px solid rgba(0, 255, 136, 0.2);
  font-family: "Monaco", "Menlo", "Ubuntu Mono", monospace;
  position: relative;
  overflow: hidden;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 2px;
    background: linear-gradient(90deg, #00ff88, #00cc6a, #00ff88);
    animation: shimmer 3s ease-in-out infinite;
  }

  @keyframes shimmer {
    0%,
    100% {
      opacity: 0.5;
    }
    50% {
      opacity: 1;
    }
  }
`;

const CodeText = styled.pre`
  color: #00ff88;
  font-size: 15px;
  line-height: 1.8;
  margin: 0;
  white-space: pre-wrap;
  text-shadow: 0 0 10px rgba(0, 255, 136, 0.3);
`;

const CodeTitle = styled.h3`
  color: #00ff88;
  font-size: 1.2rem;
  font-weight: 600;
  margin-bottom: 20px;
  text-align: center;
  text-shadow: 0 0 10px rgba(0, 255, 136, 0.3);
`;

// 섹션 구분선
const SectionDivider = styled.div`
  height: 2px;
  background: linear-gradient(
    90deg,
    transparent,
    rgba(255, 255, 255, 0.3),
    transparent
  );
  margin: 100px 0;
  border-radius: 1px;
`;

// 푸터
const Footer = styled.footer`
  background: rgba(0, 0, 0, 0.2);
  backdrop-filter: blur(10px);
  padding: 60px 20px 40px;
  text-align: center;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
`;

const FooterText = styled.p`
  color: rgba(255, 255, 255, 0.8);
  font-size: 1rem;
  margin: 0;
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
  const [widgetBom, setWidgetBom] = useState<MillieChatPlugin | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [clickCount, setClickCount] = useState(0);
  const [currentCharacter, setCurrentCharacter] = useState<string | null>(null);
  const [isAdult, setIsAdult] = useState(false);

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
    console.log(window);
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

    const bomPlugin = new window.BomtoonChatPlugin({
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
    setWidgetBom(bomPlugin);

    console.log("✅ Chat Bot SDK 초기화 완료");

    // 컴포넌트 언마운트 시 정리
    return () => {
      plugin.destroy();
      bomPlugin.destroy();
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
    const myKey = localStorage?.getItem("session-key");
    if (!myKey) {
      return alert("키를 먼저 발급받아주세요");
    } else if (!currentCharacter) {
      return alert("이전 채팅이 없습니다.");
    } else {
      if (currentCharacter === "미들마치") {
        widgetBom?.show({
          sessionId: myKey,
          character: currentCharacter,
          isAdult,
        }); // 다른 캐릭터로 테스트
      } else {
        widget?.show({
          sessionId: myKey,
          character: currentCharacter,
          isAdult,
        }); // 다른 캐릭터로 테스트
      }
      setIsVisible(true);
      setClickCount((prev) => prev + 1);
    }
  };

  const showWidget = () => {
    // 새 세션 ID 생성 또는 기존 세션 사용
    const oldKey = "c5b144f8-c54f-450c-9545-57745489cf15";
    const sessionId = oldKey;

    // show 메서드에 sessionId와 characterName 전달
    widget?.show({ sessionId, isAdult, character: "차선겸" });
    setIsVisible(true);
    setClickCount((prev) => prev + 1);
  };

  const showPrevStoryChat = () => {
    const session = localStorage?.getItem("story-session-key");
    if (!session) {
      return alert("회차대화 이야기 후 다시 시도해주세요");
    }

    widgetBom?.show({
      sessionId: session,
      character: "원요일",
      isAdult,
      storyId: 626083,
      episodeId: 2344765,
    });
    setIsVisible(true);
    setClickCount((prev) => prev + 1);
    console.log("New chat opened with session:");
  };
  const showNewStoryChat = () => {
    const newSessionId = MillieChatSDK.MillieChatPlugin.newSessionId();
    localStorage?.setItem("story-session-key", newSessionId);

    widgetBom?.show({
      sessionId: newSessionId,
      isAdult,
      character: "원요일",
      storyId: 626083,
      episodeId: 2344765,
    });
    setIsVisible(true);
    setClickCount((prev) => prev + 1);
    console.log("New chat opened with session:", newSessionId);
  };

  const showNewChat = (name: string) => {
    // 새로운 세션 ID 생성하여 새 채팅방 열기
    const newSessionId = MillieChatSDK.MillieChatPlugin.newSessionId();
    localStorage?.setItem("session-key", newSessionId);
    localStorage?.setItem("prev-chat-caracter", name);
    setCurrentCharacter(name);
    if (name === "미들마치" || name === "구윤원" || name === "원요일") {
      widgetBom?.show({ sessionId: newSessionId, character: name, isAdult }); // 다른 캐릭터로 테스트
    } else {
      widget?.show({ sessionId: newSessionId, isAdult, character: name }); // 다른 캐릭터로 테스트
    }
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

  const toggleAdult = () => {
    setIsAdult(!isAdult);
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
      {/* 배경 애니메이션 요소들 */}
      <FloatingElement
        size="100px"
        top="5%"
        left="5%"
        animationDelay="0s"
        color="#ff6b6b"
      />
      <FloatingElement
        size="140px"
        top="15%"
        left="85%"
        animationDelay="1.5s"
        color="#4ecdc4"
      />
      <FloatingElement
        size="80px"
        top="55%"
        left="10%"
        animationDelay="3s"
        color="#45b7d1"
      />
      <FloatingElement
        size="120px"
        top="65%"
        left="80%"
        animationDelay="4.5s"
        color="#96ceb4"
      />
      <FloatingElement
        size="110px"
        top="35%"
        left="45%"
        animationDelay="6s"
        color="#feca57"
      />
      <FloatingElement
        size="90px"
        top="75%"
        left="25%"
        animationDelay="7.5s"
        color="#ff9ff3"
      />
      <FloatingElement
        size="70px"
        top="25%"
        left="60%"
        animationDelay="9s"
        color="#a8e6cf"
      />
      <FloatingElement
        size="130px"
        top="85%"
        left="70%"
        animationDelay="10.5s"
        color="#ffd3a5"
      />

      <MainContent>
        {/* 헤더 섹션 */}
        <HeaderSection>
          <MainTitle>💬 Chatie Chat Bot SDK</MainTitle>
          <SubTitle>AI 채팅봇 통합 솔루션</SubTitle>
          <DescriptionCard>
            <DescriptionText>
              채팅봇 SDK를 사용하여 웹사이트에 AI 채팅봇을 쉽게 통합하세요.
              다양한 캐릭터와 설정을 통해 맞춤형 채팅 경험을 제공할 수 있습니다.
            </DescriptionText>
          </DescriptionCard>
        </HeaderSection>

        {/* 메인 콘텐츠 */}
        <ContentWrapper>
          <DescriptionCard>
            <DescriptionText>
              🎨 아름다운 디자인과 부드러운 애니메이션으로 만들어진
              페이지입니다.
              <br />
              왼쪽 상단의 개발 패널에서 다양한 기능을 테스트해보세요.
            </DescriptionText>
          </DescriptionCard>

          <SectionDivider />

          <DescriptionCard>
            <CodeTitle>💻 간단한 통합</CodeTitle>
            <CodeBlock>
              <CodeText>{`// 채팅봇 초기화 코드
const plugin = new ChatSDK({
  // 모바일에서 전체화면 여부
  mobileFullscreen: true,
  
  onChatRoomCreated: async (a, b) => {
    console.log(a, b, "챗룸생성 함수...");
  },
  
  onClickSendButton: async (a, b) => {
    console.log(a, b, "보내기이벤트...");
  },
  
  // 프로필 이미지 클릭 이벤트 핸들러
  onClickProfileImage: async (a, b) => {
    console.log(a, b, "Profile image clicked!");
    alert("프로필을 클릭했습니다!");
  },
});`}</CodeText>
            </CodeBlock>
          </DescriptionCard>
        </ContentWrapper>
      </MainContent>

      {/* 간단한 푸터 */}
      <Footer>
        <FooterText>✨ Beautiful Design Demo</FooterText>
      </Footer>

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
          </DevButton>
          <DevButton onClick={() => showNewChat("차선겸")}>
            새로 차선겸과 대화하기
          </DevButton>
          <DevButton onClick={() => showNewChat("미들마치")}>
            새로 미들마치와 대화하기
          </DevButton>
          <DevButton onClick={() => showNewChat("서리")}>
            새로 서리와 대화하기
          </DevButton> */}
          <DevButton onClick={() => showNewChat("구윤원")}>
            새로 구윤원와 대화하기
          </DevButton>
          <DevButton onClick={() => showNewChat("원요일")}>
            새로 원요일와 대화하기
          </DevButton>
          <DevButton onClick={() => showNewStoryChat()}>
            새로 스토리챗 대화하기
          </DevButton>
          <DevButton onClick={() => toggleAdult()}>
            성인 유무 {isAdult ? "true" : "false"}
          </DevButton>
          <DevButton onClick={() => showPrevStoryChat()}>
            기존 스토리챗 대화하기
          </DevButton>
          {currentCharacter && (
            <DevButton onClick={showLocalStorageKey}>
              기존 내 키로 {currentCharacter}와 대화하기
            </DevButton>
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
    </AppContainer>
  );
}
