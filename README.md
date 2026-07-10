# Privacy Policy Pages

앱 스토어용 개인정보처리방침을 호스팅하는 정적 사이트입니다.  
본문은 **마크다운(`.md`)** 으로 작성하고, HTML은 이를 화면에 보여 주는 껍데기입니다.

## URL

- 목록: https://beggu84.github.io/
- 벙벙(BungBung): https://beggu84.github.io/privacy/bungbung.html
- 앱별 방침: https://beggu84.github.io/privacy/{앱-슬러그}.html

## 새 앱 방침 추가

1. `privacy/bungbung.md`를 참고해 `privacy/{앱-슬러그}.md`를 만들고 방침 본문을 작성합니다.
2. `privacy/bungbung.html`을 복사해 `privacy/{앱-슬러그}.html`로 저장합니다. (내용 수정 불필요 — 같은 이름의 `.md`를 자동으로 불러옵니다.)
3. `index.html` 목록에 링크를 추가합니다.
4. 커밋 후 푸시하면 GitHub Pages에 반영됩니다.

> 로컬에서 `index.html`을 파일로 직접 열면 `.md` fetch가 막힐 수 있습니다. GitHub Pages에 올린 뒤 확인하거나, 로컬 서버로 열어 보세요.
