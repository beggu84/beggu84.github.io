# App Policy Pages

앱 스토어용 **개인정보 처리방침**과 **이용약관**을 호스팅하는 정적 사이트입니다.  
본문은 마크다운(`.md`)으로 작성하고, HTML은 이를 화면에 보여 주는 껍데기입니다.

## 구조

```
{앱-슬러그}/
  privacy.md      # 개인정보 처리방침 본문
  privacy.html    # 뷰어
  terms.md        # 이용약관 본문
  terms.html      # 뷰어
```

## URL

- 목록: https://beggu84.github.io/
- 벙벙 개인정보 처리방침: https://beggu84.github.io/bungbung/privacy.html
- 벙벙 이용약관: https://beggu84.github.io/bungbung/terms.html

## 새 앱 추가

1. `bungbung/` 폴더를 복사해 `{앱-슬러그}/` 로 만듭니다.
2. `privacy.md`, `terms.md` 본문을 해당 앱 내용으로 교체합니다.
3. `index.html`에 앱 섹션과 링크를 추가합니다.
4. 커밋 후 푸시하면 GitHub Pages에 반영됩니다.

HTML 파일은 같은 이름의 `.md`를 자동으로 불러오므로, 보통 수정할 필요가 없습니다.
