function parseScores(scoreString) {
  return scoreString.trim().split(" ");
}

function buildDistributionArray(scoresArray) {
  const distribution = [0, 0, 0, 0, 0];
  for (let score of scoresArray) {
    const s = Number(score);
    if (s >= 90) {
      distribution[0]++;
    } else if (s >= 80) {
      distribution[1]++;
    } else if (s >= 70) {
      distribution[2]++;
    } else if (s >= 60) {
      distribution[3]++;
    } else {
      distribution[4]++;
    }
  }
  return distribution;
}

function setTableContent(scoreString) {
  const scoresArray = parseScores(scoreString);
  const distribution = buildDistributionArray(scoresArray);

  let firstRowHtml = "";
  for (let i = 0; i < distribution.length; i++) {
    const height = distribution[i] * 10;
    firstRowHtml += `<td><div style="height:${height}px" class="bar${i}"></div></td>`;
  }
  document.getElementById("first-row").innerHTML = firstRowHtml;

  let thirdRowHtml = "";
  for (let count of distribution) {
    thirdRowHtml += `<td>${count}</td>`;
  }
  document.getElementById("third-row").innerHTML = thirdRowHtml;
}

// TODO: Change the arguments for testing purposes
setTableContent("45 78 98 83 86 99 90 59");
