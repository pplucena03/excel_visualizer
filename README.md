# 📊 Django Charts Dashboard

Um projeto simples de visualização de dados com **Django** e **Chart.js**, exibindo múltiplos gráficos interativos (de barras e pizza) com dados dinâmicos renderizados via template.

## 🚀 Tecnologias usadas

- Django
- Pandas
- Chart.js
- HTML5 + CSS3
- JavaScript (DOM manipulation)

## 📂 Estrutura de diretórios

```
├── charts/               # App principal
│   ├── templates/
│   │   └── chart.html    # Página com os gráficos
│   ├── static/
│   │   ├── css/
│   │   │   └── chart.css
│   │   └── js/
│   │       └── chart.js
│   └── views.py          # Lógica para passar os dados
├── charts_project/
│   └── settings.py
├── manage.py
└── README.md             # Este arquivo
```

## 📈 Funcionalidades

- Visualização de dois tipos de gráficos: **barras** e **pizza (doughnut)**
- Dados injetados dinamicamente via `data-*` no HTML
- Layout responsivo
- Estilização personalizada com `chart.css`

## ⚙️ Como rodar o projeto localmente

1. Clone o repositório:

   ```bash
   git clone https://github.com/pplucena03/excel_visualizer.git
   cd excel_visualizer
   ```

2. Crie e ative um ambiente virtual:

   ```bash
   python -m venv venv
   source venv/bin/activate  # Linux/macOS
   venv\Scripts\activate     # Windows
   ```

3. Instale as dependências:

   ```bash
   pip install django
   pip install pandas
   ```

4. Rode as migrações e inicie o servidor:

   ```bash
   python manage.py migrate
   python manage.py runserver
   ```

5. Acesse o localhost

## 📌 Pontos de melhoria futuros

- Permitir upload de dados via CSV ou formulário
- Permitir upload de arquivos com diferentes colunas
- Adicionar filtros interativos (por mês, produto, etc)
- Suporte a mais tipos de gráficos: linha, radar, polar area
- Dashboard com mais páginas

## 👨‍💼 Autor

Pedro Paulo de Lucena – [linkedin.com/in/pedropaulo03](https://linkedin.com/in/pedropaulo03/)
Informações adicionais: Estudante de Sistemas de Informação, entusiasta de programação, idiomas e visualização de dados.

---
