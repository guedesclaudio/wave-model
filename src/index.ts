import { QMainWindow, QWidget, QLabel, FlexLayout, QPushButton, QIcon, QCheckBox, QInputDialog, QFileDialog } from '@nodegui/nodegui';
import logo from '../assets/logox200.png';


//VAI TER UM LAYOUT COM O NOME E ALGUMAS INSTRUÇÕES
//VAI TER UM BOTAO PRA ENTRAR COM OS ARQUIVOS DOS PERFIS DE PRAIA -> VAI CHAMAR A FUNÇÃO QUE MANIPULA OS DADOS DO PERFIL DE PRAIA, SE TIVER OK VAI PROSSEGUIR SE NÃO VAI RETORNAR UM ERRO
//VAI TER UM BOTAO PRA ENTRAR COM OS ARQUIVOS DE ONDA -> VAI CHAMAR A FUNÇÃO QUE MANIPULA OS DADOS DE ONDA, SE TIVER OK VAI PROSSEGUIR SE NÃO VAI RETORNAR UM ERRO
//VAI TER UM BOTAO QUE VAI PEDIR PRA DAR O START E CALCULAR
//ENQUANTO RODA VAI APARECER OS LOGS

const win = new QMainWindow();
win.setWindowTitle("Wave Numeric Modell");

const centralWidget = new QFileDialog();
centralWidget.setObjectName("myroot");
const rootLayout = new FlexLayout();
centralWidget.setLayout(rootLayout);
centralWidget.addEventListener('fileSelected', (file) => {
  console.log(file);
})

// const label = new QLabel();
// label.setObjectName("mylabel");
// label.setText("Hello");

// const checkbox = new QCheckBox();
// checkbox.setText('Check/Uncheck me');
// checkbox.addEventListener('clicked', (checked) => {
//     console.log('was checked', checked);
// });

// const input = new QInputDialog();
// input.setLabelText('input');

const button = new QPushButton();
button.setIcon(new QIcon(logo));
button.addAction('console.log("apertou")')

const label2 = new QLabel();
label2.setText("World");
label2.setInlineStyle(`
  color: red;
`);

//rootLayout.addWidget(label);
rootLayout.addWidget(button);
rootLayout.addWidget(label2);
win.setCentralWidget(centralWidget);
//win.setCentralWidget(checkbox);
//win.setCentralWidget(input)
win.setStyleSheet(
  `
    #myroot {
      background-color: #009688;
      height: '100%';
      align-items: 'center';
      justify-content: 'center';
    }
    #mylabel {
      font-size: 16px;
      font-weight: bold;
      padding: 1;
    }
  `
);
win.show();

(global as any).win = win;
