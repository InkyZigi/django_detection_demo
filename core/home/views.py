from django.shortcuts import render, redirect, reverse


# Create your views here.
def index(request):
    page_dict = {'title': 'Intelligent Industrial Vision System for Defect Detection'}
    return render(request, "home/index.html", {'topic': 'home', 'theme': 'dark', 'page': page_dict})


def system_design(request):
    page_dict = {'title': 'Intelligent Industrial Vision System for Defect Detection - System-Design'}
    return render(request, "home/system-design.html", {'page': page_dict})


def embedded_design(request):
    page_dict = {'title': 'Intelligent Industrial Vision System for Defect Detection - Embedded-System-Design'}
    return render(request, "home/embedded_design.html", {'page': page_dict})


def tech_support(request):
    page_dict = {'title': 'Intelligent Industrial Vision System for Defect Detection - Tech-Support'}
    return render(request, "home/tech-support.html", {'page': page_dict})


def hardware(request):
    page_dict = {'title': 'Intelligent Industrial Vision System for Defect Detection - Hardware-Support'}
    return render(request, "home/hardware.html", {'page': page_dict})


def web_design(request):
    page_dict = {'title': 'Intelligent Industrial Vision System for Defect Detection - Design'}
    return render(request, "home/web_design.html", {'page': page_dict})


def contact(request):
    page_dict = {'title': 'Intelligent Industrial Vision System for Defect Detection - Contact'}
    return render(request, "home/contact.html", {'page': page_dict})


def about(request):
    page_dict = {'title': 'Intelligent Industrial Vision System for Defect Detection - About Us'}
    return render(request, "home/about.html", {'page': page_dict})


def privacy(request):
    page_dict = {'title': 'Intelligent Industrial Vision System for Defect Detection - Privacy Policy'}
    return render(request, "home/privacy.html", {'page': page_dict})

