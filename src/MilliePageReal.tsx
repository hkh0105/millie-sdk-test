import React, { useEffect, useState } from "react";
import styled from "@emotion/styled";

const PageContainer = styled.div`
  width: 100%;
  max-width: 100vw;
  min-height: 100vh;
  background: white;
  overflow-x: hidden;

  /* 모든 하위 요소가 viewport를 넘지 않도록 제한 */
  * {
    max-width: 100%;
    box-sizing: border-box;
  }

  /* 이미지가 화면을 넘지 않도록 */
  img {
    max-width: 100%;
    height: auto;
  }

  /* Millie 페이지 스타일 유지 */
  .section {
    padding: 60px 20px;
    text-align: center;
    max-width: 100%;
    overflow-x: hidden;
  }

  .section-01 {
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    color: white;
    padding: 100px 20px;
    max-width: 100%;
  }

  .section-02 {
    background: #f7f9fc;
    max-width: 100%;
  }

  .message-button,
  .mds-button {
    cursor: pointer;
    transition: all 0.3s ease;

    &:hover {
      transform: translateY(-2px);
    }
  }

  /* 모바일에서 패딩 조정 */
  @media (max-width: 768px) {
    .section {
      padding: 40px 15px;
    }

    .section-01 {
      padding: 60px 15px;
    }
  }
`;

interface MilliePageRealProps {
  onStartChat: () => void;
}

export const MilliePageReal: React.FC<MilliePageRealProps> = ({
  onStartChat,
}) => {
  const [htmlContent, setHtmlContent] = useState<string>("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Millie 페이지 HTML을 직접 포함
    const millieHTML = `
      <div data-v-66b9685e="" id="wrap" class="web-mount pcv-mount">
        <section data-v-66b9685e="" class="content">
          <div data-v-6f5dbca0="" data-v-66b9685e="" class="persona-ai-chatbot not-dark">
            
            <!-- Section 1: Hero -->
            <section data-v-6f5dbca0="" class="section section-01">
              <div data-v-6f5dbca0="" class="inner">
                <div data-v-6f5dbca0="" class="content">
                  <h3 data-v-6f5dbca0="">참아주세요, 대공</h3>
                  <strong data-v-6f5dbca0="">클로드 대공 AI와 연애하자!</strong>
                  <p>나밖에 모르는 냉정한 대공?!</p>
                  <em data-v-6f5dbca0="">
                    클로드 대공 AI는
                    당신과의 로맨스를 참지 않아요
                  </em>
                </div>
              </div>
            </section>
            
            <!-- Section 2: Chat Preview -->
            <section data-v-6f5dbca0="" class="section section-02">
              <div data-v-6f5dbca0="" class="inner">
                <div data-v-6f5dbca0="" class="content">
                  <h3 data-v-6f5dbca0="">클로드 델 이하르 대공 챗봇 대화 내용</h3>
                  <div data-v-6f5dbca0="" class="message-wrapper">
                    <img data-v-6f5dbca0="" src="https://svc-fe-artifact.millietown.com/v3/images/event/aiChatbot/findingCamellia/img-section02-chat-01.c9662961b4cc59469d0b42f35b482311.png" alt="클로드 델 이하르 대공 AI: 나는 참아주세요, 대공 세계관으로 만들어진 클로드 델 이하르 대공 AI" class="message">
                    <img data-v-6f5dbca0="" src="https://svc-fe-artifact.millietown.com/v3/images/event/aiChatbot/findingCamellia/img-section02-chat-02.dec7773a12083a7026436a31dc27eace.png" alt="클로드 델 이하르 대공 AI: 이렇게 AI가 되어 카닐리아 당신을 만나니, 감회가 아주 새로운데?" class="message">
                    <img data-v-6f5dbca0="" src="https://svc-fe-artifact.millietown.com/v3/images/event/aiChatbot/findingCamellia/img-section02-chat-03.f0cc55a9a3d329b580debca673cdfcd6.png" alt="나: 대공님. 제발 참아주세요. 여전히 제정신이 아니신 것 같아요." class="message">
                    <img data-v-6f5dbca0="" src="https://svc-fe-artifact.millietown.com/v3/images/event/aiChatbot/findingCamellia/img-section02-chat-04.29918ef7bcb3a9700f5c08cbfbdf650c.png" alt="클로드 델 이하르 대공 AI: 미치기 직전이지. 누구 때문에" class="message">
                    <img data-v-6f5dbca0="" src="https://svc-fe-artifact.millietown.com/v3/images/event/aiChatbot/findingCamellia/img-section02-chat-05.4ea2bce5759dc7a4dc32bc4c06ccf0f0.png" alt="클로드 델 이하르 대공 AI: AI가 되어 당신과 대화하는 마당에 더 이상 참아야하는 이유는 없어. 지금 당장 나랑 대화를 시작해, 카닐리아" class="message">
                  </div>
                  <button data-v-6f5dbca0="" class="message-button" id="start-chat-btn-1">
                    <img data-v-6f5dbca0="" src="https://svc-fe-artifact.millietown.com/v3/images/event/aiChatbot/findingCamellia/img-section02-button-2.c41ca0f6dc5b0e5a813e8cb90a16749d.png" alt="클로드 대공 AI와 대화하기">
                  </button>
                </div>
              </div>
            </section>
            
            <!-- Section 3: How to -->
            <section data-v-6f5dbca0="" class="section section-03">
              <div data-v-6f5dbca0="" class="inner">
                <div data-v-6f5dbca0="" class="content">
                  <img data-v-6f5dbca0="" src="https://svc-fe-artifact.millietown.com/v3/images/event/aiChatbot/findingCamellia/img-section03-text.0811fb9cccd491b8f34501057b38683f.png" alt="">
                  <h3 data-v-6f5dbca0="">클로드 대공 AI와 찐한 로맨스 대화하는 법!</h3>
                </div>
              </div>
            </section>
            
            <!-- Section 4: AI Info -->
            <section data-v-6f5dbca0="" class="section section-04">
              <div data-v-6f5dbca0="" class="inner">
                <div data-v-6f5dbca0="" class="content">
                  <img data-v-6f5dbca0="" src="https://svc-fe-artifact.millietown.com/v3/images/event/aiChatbot/findingCamellia/img-section04-text.7b9722400d26107ed6d3fb573a7e9d5f.png" alt="">
                  <h3 data-v-6f5dbca0="">클로드 대공 AI는 어떻게 만들어졌을까요?</h3>
                  <img data-v-6f5dbca0="" src="https://svc-fe-artifact.millietown.com/v3/images/event/aiChatbot/findingCamellia/img-section04-card01.bdf887501d75cc8fcd74d4a5cd0943a3.png" alt="" class="mds-shadow--card02 mds-radius--12">
                </div>
              </div>
            </section>
            
            <!-- Section 5: Book Info -->
            <section data-v-6f5dbca0="" class="section section-05">
              <div data-v-6f5dbca0="" class="inner">
                <div data-v-6f5dbca0="" class="content">
                  <img data-v-6f5dbca0="" src="https://svc-fe-artifact.millietown.com/v3/images/event/aiChatbot/findingCamellia/img-section05-text.b6b672eb03b54fa6e22ab84be380e054.png" alt="">
                  <a data-v-6f5dbca0="" href="#" class="book-link">
                    <img data-v-6f5dbca0="" src="https://svc-fe-artifact.millietown.com/v3/images/event/aiChatbot/findingCamellia/img-section05-card01.4277ab275a384df615d9951a0c6e9f8d.png" alt="">
                  </a>
                  <button data-v-6f5dbca0="" class="addshelf-button">
                    <img data-v-6f5dbca0="" src="https://svc-fe-artifact.millietown.com/v3/images/event/aiChatbot/schopenhauer/img-section05-button.ba23aec3f40adf26add54fa4bd6bc9d9.png" alt="내 서재에 담기">
                  </button>
                </div>
              </div>
            </section>
            
            <!-- Section 6: Start -->
            <section data-v-6f5dbca0="" class="section section-start">
              <div data-v-6f5dbca0="" class="inner">
                <div data-v-6f5dbca0="" class="content">
                  <img data-v-6f5dbca0="" src="https://svc-fe-artifact.millietown.com/v3/images/event/aiChatbot/img-section06-text.87061e53df93d0996bf8b1cf40898a0f.png" alt="">
                  <h3 data-v-6f5dbca0="">개인정보 수집 동의하고 AI 챗봇과 대화하기</h3>
                  <div data-v-6f5dbca0="" class="button-wrapper">
                    <button data-v-6f5dbca0="" type="button" class="mds-button mds-button--primary mds-button--h56 mds-button--r100" id="start-chat-btn-2">
                      <span>AI 챗봇과 대화하기</span>
                    </button>
                  </div>
                </div>
              </div>
            </section>
            
          </div>
        </section>
      </div>
    `;

    setHtmlContent(millieHTML);
    setLoading(false);
  }, []);

  useEffect(() => {
    // 버튼 클릭 이벤트 연결
    if (!loading) {
      const buttons = document.querySelectorAll(
        "#start-chat-btn-1, #start-chat-btn-2, .message-button, .mds-button"
      );
      buttons.forEach((button) => {
        button.addEventListener("click", onStartChat);
      });

      return () => {
        buttons.forEach((button) => {
          button.removeEventListener("click", onStartChat);
        });
      };
    }
  }, [loading, onStartChat]);

  if (loading) {
    return <div>Loading...</div>;
  }

  return <PageContainer dangerouslySetInnerHTML={{ __html: htmlContent }} />;
};
