# Conceitos Fundamentais

Caminho para os conteitos abaixo: 
> app/components/template

* Text Interpolation

```HTML
<p> {{ nome }} </p> 
```

<br>

* Property Binding / Attribute Binding

```HTML
<button [disabled]="isDisabled">Click me</button> 
```

<br>

* Class and Style Binding

```HTML   
<button 
    [class.success]="condition"
    [class.danger]="!condition"
>Button of example</button> 
```
<br>

* Event Binding

```HTML 
<div class="box" (mousemove)="showValues($event)"></div>
```
<br>

* Template Variables

```HTML 
<h3 #title>Template Reference Variables</h3>
```
```javascript
@ViewChild('title') public titlePage!: ElementRef
```


