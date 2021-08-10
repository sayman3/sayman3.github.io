const quotes = [
    {
        quote:"긍정적인 생각과 결합된 긍정적인 행동은 성공을 불러온다.",
        author:"시브 카에라",
    },
    {
        quote:"도전에 성공하는 비결은 단 하나, 결단코 포기하지 않는 일이다.",
        author:"디어도어 루빈",
    },
    {
        quote:"도중에 포기하지 말라 망설이지 말라 최후의 성공을 거둘 때까지 밀고 나가자.",
        author:"데일 카네기",
    },
    {
        quote:"마음속에 행복한 기대를 안고 보낸 시간이 성공을 이룬 시간보다 더 즐거운 법이다.",
        author:"올리버 골드 스미스",
    },
    {
        quote:"성공은 결과이지 목적은 아니다.",
        author:"G.플로베르",
    },
    {
        quote:"성공은 수만 번의 실패를 감싸준다.",
        author:"조지 버나드 쇼",
    },
    {
        quote:"시도하지 않는 곳에 성공이 있었던 예는 결코 없다.",
        author:"H.넬슨",
    },
    {
        quote:"우리가 실패에서 배우면, 실패는 성공이 된다.",
        author:"말콤 포브스",
    }
];
const quote =document.querySelector("#quote span:first-child");
const author =document.querySelector("#quote span:last-child");
const todaysQuote=quotes[Math.floor(Math.random()*quotes.length)];
quote.innerText=todaysQuote.quote;
author.innerText=todaysQuote.author;
