(async function () {
  const content = document.getElementById("content");
  if (!content) return;

  const slug = location.pathname.split("/").pop().replace(/\.html$/i, "");
  const mdUrl = `${slug}.md`;

  try {
    const response = await fetch(mdUrl);
    if (!response.ok) throw new Error(`HTTP ${response.status}`);
    const markdown = await response.text();
    content.innerHTML = marked.parse(markdown);

    const heading = content.querySelector("h1");
    if (heading) {
      document.title = heading.textContent.trim();
    }
  } catch (error) {
    content.innerHTML =
      `<p class="status">문서를 불러오지 못했습니다. ` +
      `<code>${mdUrl}</code> 파일이 같은 폴더에 있는지 확인해 주세요.</p>`;
    console.error(error);
  }
})();
