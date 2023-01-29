from django.shortcuts import render
from .models import Todo
from django.http import JsonResponse

def todo_list(request):
    todos = Todo.objects.all()
    todos_list = [todo.to_json() for todo in todos]
    return JsonResponse(todos_list, safe=False)