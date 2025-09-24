import React from "react";
import styled from "@emotion/styled";

const PageContainer = styled.div`
  width: 100%;
  min-height: 100vh;
  background: white;
`;

const Section = styled.section`
  padding: 60px 20px;
  text-align: center;

  &.section-01 {
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    color: white;
    padding: 100px 20px;
  }

  &.section-02 {
    background: #f7f9fc;
  }

  &.section-03 {
    background: white;
  }

  &.section-04 {
    background: #fef5e7;
  }

  &.section-05 {
    background: #f0f4f8;
  }
`;

const Title = styled.h1`
  font-size: 48px;
  font-weight: 800;
  margin-bottom: 20px;

  @media (max-width: 768px) {
    font-size: 32px;
  }
`;

const SubTitle = styled.h3`
  font-size: 28px;
  font-weight: 700;
  margin-bottom: 20px;
  color: #333;
`;

const Description = styled.p`
  font-size: 20px;
  line-height: 1.6;
  margin-bottom: 40px;
  color: #666;
`;

const ChatMessage = styled.div`
  max-width: 400px;
  margin: 20px auto;
  padding: 15px 20px;
  background: white;
  border-radius: 20px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  text-align: left;
  font-size: 16px;

  &.ai {
    background: #667eea;
    color: white;
    margin-left: auto;
    margin-right: 20px;
  }

  &.user {
    background: #f0f0f0;
    margin-left: 20px;
    margin-right: auto;
  }
`;

const BigButton = styled.button`
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  border: none;
  padding: 20px 60px;
  font-size: 20px;
  font-weight: 700;
  border-radius: 100px;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 8px 24px rgba(102, 126, 234, 0.4);
  margin: 40px auto;
  display: block;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 12px 32px rgba(102, 126, 234, 0.5);
  }
`;

interface MilliePageProps {
  onStartChat: () => void;
}

export const MilliePage: React.FC<MilliePageProps> = ({ onStartChat }) => {
  return (
    <PageContainer>
      {/* Section 1: Hero */}
      <Section className="section-01">
        <Title>참아주세요, 대공</Title>
        <Description>
          클로드 대공 AI와 연애하자!
          <br />
          나밖에 모르는 냉정한 대공?!
          <br />
          클로드 대공 AI는 당신과의 로맨스를 참지 않아요
        </Description>
      </Section>

      {/* Section 2: Chat Preview */}
      <Section className="section-02">
        <SubTitle>클로드 델 이하르 대공 챗봇 대화 내용</SubTitle>
        <ChatMessage className="ai">
          나는 "참아주세요, 대공" 세계관으로 만들어진 클로드 델 이하르 대공 AI
        </ChatMessage>
        <ChatMessage className="ai">
          이렇게 AI가 되어 카닐리아 당신을 만나니, 감회가 아주 새로운데?
        </ChatMessage>
        <ChatMessage className="user">
          대공님. 제발 참아주세요. 여전히 제정신이 아니신 것 같아요.
        </ChatMessage>
        <ChatMessage className="ai">미치기 직전이지. 누구 때문에</ChatMessage>
        <ChatMessage className="ai">
          AI가 되어 당신과 대화하는 마당에 더 이상 참아야하는 이유는 없어. 지금
          당장 나랑 대화를 시작해, 카닐리아
        </ChatMessage>

        <BigButton onClick={onStartChat}>클로드 대공 AI와 대화하기</BigButton>
      </Section>

      {/* Section 3: How to */}
      <Section className="section-03">
        <SubTitle>클로드 대공 AI와 찐한 로맨스 대화하는 법!</SubTitle>
        <Description>
          작품 내용을 몰라도 괜찮아요.
          <br />
          <strong>간단한 일상 대화로 시작해볼까요?</strong>
        </Description>
        <ChatMessage className="user">
          꽃 보러 가고싶다. 나만 꽃 구경 못했어
        </ChatMessage>
        <ChatMessage className="ai">
          그걸 왜 이제 말하지? 기다려. 당장 이 나라의 모든 꽃을 다 뽑아오라고
          할테니까.
        </ChatMessage>
      </Section>

      {/* Section 4: AI Info */}
      <Section className="section-04">
        <SubTitle>클로드 대공 AI는 어떻게 만들어졌을까요?</SubTitle>
        <Description>
          AI가 작품 세계관, 인물 특징을 공부하여
          <br />
          클로드 대공만의 페르소나를 탑재해요
        </Description>
      </Section>

      {/* Section 5: Book Info */}
      <Section className="section-05">
        <SubTitle>당신의 연애 세포를 깨울 오디오 웹소설</SubTitle>
        <Description>
          <strong>"네가 그 여인이든, 아니든 상관없어"</strong>
          <br />
          매력적인 클로드 대공에게 빠져보세요.
        </Description>

        <BigButton onClick={onStartChat}>AI 챗봇과 대화하기</BigButton>
      </Section>
    </PageContainer>
  );
};
