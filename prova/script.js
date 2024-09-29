acertos=0

















            const resultado = document.getElementById('resultado');
            
            const questions = [
                'Quem foi que gritou "independencia ou morte"',
                "Qual é a capital da França?",
                "Qual é o maior planeta do nosso sitema solar",
                "Qual é a atual capital do Brasil",
                "Quem foi o primeiro presidente do Brasil"
            ];
            const options = [
                ["Dom Pedro II", "Tiririca", "Dom Pedro I", "Zacarias"],
                ["Londres", "Paris", "Berlim", "Madrid"],
                ["Vênus", "Marte", "Júpiter", "Saturno"],
                ["Salvador","Rio de Janeiro", "São Paulo", "Brasilia"],
                ["Deodoro da Fonseca","Enéas Carneiro","Castelo Branco","Felipe Neto"]
            ];
            const correctAnswers = [2,1,2,3,0];
            
            let reloadButton = document.getElementById('reload')
            reloadButton.style.display = "none";
            let nowQuestion = Math.floor(Math.random() * questions.length);
            
            generateQuestions();
            selectButton();
    
            function generateQuestions(){
                
                document.getElementById("question").innerHTML = questions[nowQuestion];
                
                const optionsContainer = document.querySelectorAll('button');
                optionsContainer.forEach((element,index) =>{element.textContent = options[nowQuestion][index]});
                
            }
            
            function selectButton(){
                const alternatives = document.querySelectorAll('.alternative');
            
                alternatives.forEach(button =>{
                    button.addEventListener('click', () => {
                        const answer = button.value;0 
                        checkAnswer(answer);
                })
            })
            }
    
            function checkAnswer(answer){
                answer = parseInt(answer);
                let statusAnswer = document.getElementById("statusAnswer");
                if(answer == correctAnswers[nowQuestion]){
                    statusAnswer.innerHTML = "Acertou!!!"
                    acertos++

                    const dados = {
                        mensagem: acertos
                      };
                      
                      const jsonData = JSON.stringify(dados);
                      
                      fs.writeFile('index.json', jsonData, (err) => {
                        if (err) throw err;
                      });
                      
                    resultado.textContent = "acertos:"+acertos;
                }
                else{
                    console.log
                    statusAnswer.innerHTML = `Errou meu chapa, resposta correta ${options[nowQuestion][correctAnswers[nowQuestion]]}`
                    resultado.textContent = "acertos:"+acertos;
                }
                reloadButton.style.display = "block";
            }
            resultado.textContent = "acertos:"+acertos;
            document.getElementById('reload').addEventListener('click', () => location.reload())