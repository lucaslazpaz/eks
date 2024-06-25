### Após conclusão criação do EKS pelo terraform, realizar o comando:

`aws eks update-kubeconfig --region us-east-1 --name k8s-poc-eks-cluster`

### Verificar usuário atual:

`aws sts get-caller-identity`

OBS: Verificar se há permissões de acesso ao cluster com ClusterAdmin role na aba de acesso do EKS no aws console!

### Utilizado aplicação chucknorris jokes para exemplificar o processo de deploy:

git clone https://github.com/betterstack-community/chucknorris

#### Docker build local:

`docker build -f Dockerfile -t devops/production/chucknorris-app:1.0 .`

#### Docker run local:

`docker run -p 8080:80 devops/production/chucknorris-app:1.0`
