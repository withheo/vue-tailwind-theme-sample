# Agenda 
- vue3 + typescript + vite 
- + tailwindCss 3.x
- app id => prefix class 변경으로 전체 css 컬러 변경 가능여부 테스트

# 필요 항목
- tw-colors 설치
- createThemes 로 추가 가능확인
```
plugins: [
    createThemes({
      dark: {
        base: '#000',
        "text-base": '#e2e2e2',
        "bg-base": "#000",
      },
      light: {
        base: '#f1f1f1',
        "text-base": '#2e2e2e',
        "bg-base": "#f1f1f1",
      }
    })
  ],
```