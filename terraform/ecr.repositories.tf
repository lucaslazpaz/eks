resource "aws_ecr_repository" "chucknorris-app" {
  name                 = var.ecr_repositories.chucknorris_app
  image_tag_mutability = "MUTABLE"
  force_delete         = true
}