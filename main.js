const linksSocialMedia = {
  github: "michelfranklin81",
  youtube: "channel/UC7VxQ6jmw7NLJ_0kfzqusmg",
  facebook: "michelfranklin81",
  instagram: "michelfranklin81",
  twitter: "michelfranklin81",
};

function changeSocialMediaLinks() {
  /*Manipulando o DOM - document.getElementById('userName').textContent = "Olívia"  -  O textContent permite acessar o conteúdo do elemento 
    userName.textContent = "Marcelo" Utilizando este método o navegador entende que o userName
    é um id e executa automaticamente um document.getElementById('userName')*/
  for (let li of socialLinks.children) {
    const social = li.getAttribute("class"); // O getAttribute é um método que pega a classe da li
    li.children[0].href = `https://${social}.com/${linksSocialMedia[social]}`;
    /* Laço de repetição - O for vai armazenar na variável li um children de SocialLinks (A primeira li).
      Ao fazer isso ele iniciará o laço com o primeiro children de li (neste caso é o Youtube).
      Feito isso ele vai mostrar o a url https:// e dentro da url vai indicar qual classe (neste caso a classe da
      variável social) e após o .com qual o usuário. O usuário está dentro do objeto linksSocialMedia
      (Por se tratar de um objeto devemos incluir os [], mencionar a variável que armazena as classes que preciso
      (no caso classe social - Aqui as classes tem o mesmo nome das propriedades do objeto) e qual a propriedade 
      deste objeto eu quero). Nisso o compilador vai buscar a propriedade que possui o mesmo nome da classe que ele
      buscou antes e reiniciará o laço de repetição para as demais redes sociais. Obs. Ele não vai buscar o github, 
      pois não tenho uma classe com o nome github*/
    /*  alert(li.children[0].href) */
  }
}
changeSocialMediaLinks();

function getGitHubProfileInfos() {
  const url = `https://api.github.com/users/${linksSocialMedia.github}`;
  //Consumindo uma API
  fetch(url) // O fetch pegará os dados da url
    .then((response) => response.json())
    .then((data) => {
      userName.textContent = data.name;
      userBio.textContent = data.bio;
      userLink.href = data.html_url;
      userImage.src = data.avatar_url;
      userLogin.textContent = data.login;
    });
  /* O then pegará esta resposta (response) e a arrow function transformará essa 
  response em um objeto json*/
}
getGitHubProfileInfos();
