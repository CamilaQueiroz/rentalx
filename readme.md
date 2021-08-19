# Cadastro de veículo

**RF**
O usuário administrador deve poder cadastrar um carro
Deve ser possivel listar todas as categorias

**RNF**

**RN**
Verificar se o usuário é administrador
Verificar se a placa já está cadastrada
Não alterar a placa de veículo já cadastrado
Cadastrar veículo com disponibilidade por padrão

# Listagem de veículos

**RF**
Deve ser possível listar todos os veículos disponíveis
Deve ser possivel listar todos os veículos disponíveis pelo nome da categoria
Deve ser possivel listar todos os veículos disponíveis pelo nome da marca
Deve ser possivel listar todos os veículos disponíveis pelo modelo do carro

**RNF**

**RN**
Não precisa logar no sistema

# Cadastro de especificação do veículo

**RF**
O usuário administrador deve poder cadastrar especificações ao veículo
Deve ser possível listar todas as especificações

**RNF**

**RN**
Verificar se o usuário é administrador
Verificar se o carro está cadastrado
Verificar se o carro já tem a especificação a se cadastrar

# Cadastro de imagens

**RF**
Deve ser possível cadastrar a imagem do veículo

**RNF**
Utilizar o multer para upload dos arquivos

**RN**
Verificar se o usuário é administrador
O usuário deve poder cadastrar mais de 1 imagem para o mesmo veículos

# Agendamento de aluguel

**RF**
Deve ser possível cadastrar um aluguel

**RNF**

**RN**
O aluguel deve ter duração mínima de 6h
Não permitir novo aluguel caso já tenha um na data solicitada.
Não permitir o mesmo carro em mais de 1 aluguel.
