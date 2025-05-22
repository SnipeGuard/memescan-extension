
(function() {
  const overlay = document.createElement('button');
  overlay.textContent = "Analyze";
  overlay.style.position = "fixed";
  overlay.style.bottom = "20px";
  overlay.style.right = "20px";
  overlay.style.zIndex = "99999";
  overlay.style.padding = "10px 20px";
  overlay.style.background = "#111";
  overlay.style.color = "#fff";
  overlay.style.border = "none";
  overlay.style.borderRadius = "5px";
  overlay.style.cursor = "pointer";
  overlay.onclick = async () => {
    const domain = location.hostname;
    const tokenAddress = prompt("Enter token address:");
    const res = await fetch(`http://localhost:4000/api/risk-score?domain=${domain}&tokenAddress=${tokenAddress}`);
    const data = await res.json();
    alert(`Risk: ${data.riskScore.level}\nScore: ${data.riskScore.score}`);
  };
  document.body.appendChild(overlay);
})();
