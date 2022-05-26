import './styles.css';

const onClickAdd = () => {
  // テキストボックスの値を取得して削除
  const inputText = document.getElementById('add-text')
    .value;
  document.getElementById('add-text').value = '';

  createIncompList(inputText);
};

//未完了リストから削除
const deletedFromIncompleteList = (target) => {
  document
    .getElementById('incomp-list')
    .removeChild(target);
};

// 未完了リストに追加する関数
const createIncompList = (text) => {
  const div = document.createElement('div');
  div.className = 'list-row';
  div.className = 'flex';

  const li = document.createElement('li');
  li.innerText = text;
  // alert(inputText);
  // console.log(li);

  const compButton = document.createElement('button');
  compButton.innerText = '完了';
  // console.log(compButton);
  compButton.addEventListener('click', () => {
    deletedFromIncompleteList(compButton.parentNode);
    const addTarget = compButton.parentNode;
    const text = addTarget.firstElementChild.innerText;

    addTarget.textContent = null;
    console.log(addTarget);

    const li = document.createElement('li');
    li.innerText = text;

    const backButton = document.createElement('button');
    backButton.innerText = '戻す';
    backButton.addEventListener('click', () => {
      const deleteTaget = backButton.parentNode;
      document
        .getElementById('comp-list')
        .removeChild(deleteTaget);

      const text =
        backButton.parentNode.firstElementChild.innerText;
      createIncompList(text);
    });

    addTarget.appendChild(li);
    addTarget.appendChild(backButton);

    document
      .getElementById('comp-list')
      .appendChild(addTarget);
  });

  const deleButton = document.createElement('button');
  deleButton.innerText = '削除';
  deleButton.addEventListener('click', () => {
    deletedFromIncompleteList(deleButton.parentNode);
  });
  // // alert('削除');
  // const deleteTaget = deleButton.parentNode;
  // document
  //   .getElementById('incomp-list')
  //   .removeChild(deleteTaget);
  // // console.log(deleteTaget);

  // divの子要素に要差追加
  div.appendChild(li);
  div.appendChild(compButton);
  div.appendChild(deleButton);

  // 未完了リストに追加
  document.getElementById('incomp-list').appendChild(div);
};

document
  .getElementById('add-button')
  .addEventListener('click', () => onClickAdd());
