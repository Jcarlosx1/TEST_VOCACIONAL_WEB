const preguntas=[

    ["1. En tu tiempo libre prefieres:",
    ["Resolver juegos de lógica","contador"],
    ["Dibujar o crear imágenes","grafico"],
    ["Explorar páginas web o tecnología","web"],
    ["Armar o revisar aparatos","mecatronica"]],
    
    ["2. Si ayudaras en un negocio familiar:",
    ["Controlar el dinero","contador"],
    ["Diseñar publicidad","grafico"],
    ["Administrar la página web","web"],
    ["Atender llamadas y organizar documentos","secretariado"]],
    
    ["3. ¿Qué actividad te gusta más?",
    ["Organizar cuentas","contador"],
    ["Crear diseños","grafico"],
    ["Crear páginas web","web"],
    ["Armar aparatos o robots","mecatronica"]],
    
    ["4. Cuando hay un problema:",
    ["Analizas números","contador"],
    ["Buscas una idea creativa","grafico"],
    ["Buscas una solución digital","web"],
    ["Intentas repararlo","electricidad"]],
    
    ["5. ¿Qué te llama más la atención?",
    ["Cómo funcionan los negocios","admin"],
    ["Cómo se hacen los anuncios","grafico"],
    ["Cómo funcionan las páginas web","web"],
    ["Cómo funcionan las máquinas","mecatronica"]],
    
    ["6. En el colegio destacas más en:",
    ["Matemática","contador"],
    ["Arte","grafico"],
    ["Computación","web"],
    ["Tecnología o talleres","electricidad"]],
    
    ["7. Si eligieras un club sería:",
    ["Matemáticas o finanzas","contador"],
    ["Arte o diseño","grafico"],
    ["Programación o web","web"],
    ["Robótica","mecatronica"]],
    
    ["8. En un trabajo en grupo tú:",
    ["Organizas información","contador"],
    ["Diseñas la presentación","grafico"],
    ["Haces la parte tecnológica","web"],
    ["Coordinar o dirigir","admin"]],
    
    ["9. Videos que más te gustan:",
    ["Educativos","contador"],
    ["Diseño o creatividad","grafico"],
    ["Tecnología o programación","web"],
    ["Viajes o turismo","turismo"]],
    
    ["10. Te gustaría aprender:",
    ["Administrar dinero","contador"],
    ["Diseño digital","grafico"],
    ["Crear páginas web","web"],
    ["Organizar empresas","admin"]],
    
    ["11. Si una computadora falla:",
    ["Analizas el problema","contador"],
    ["Piensas solución creativa","grafico"],
    ["Revisas el sistema","web"],
    ["Revisas cables o hardware","electricidad"]],
    
    ["12. Qué te llama más la atención:",
    ["Administración de empresas","admin"],
    ["Publicidad","grafico"],
    ["Internet y páginas web","web"],
    ["Hoteles y turismo","turismo"]],
    
    ["13. Tus amigos dicen que eres:",
    ["Ordenado","contador"],
    ["Creativo","grafico"],
    ["Tecnológico","web"],
    ["Responsable con documentos","secretariado"]],
    
    ["14. Qué te gustaría aprender mejor:",
    ["Contabilidad","contador"],
    ["Diseño digital","grafico"],
    ["Programación web","web"],
    ["Organización administrativa","secretariado"]],
    
    ["15. En el futuro te imaginas:",
    ["Trabajando con números","contador"],
    ["Diseñando contenido","grafico"],
    ["Creando sitios web","web"],
    ["Dirigiendo empresa o negocio","admin"]]
    
    ];
    
    const form=document.getElementById("test");
    
    preguntas.forEach((p,i)=>{
    
    let div=document.createElement("div");
    div.className="question";
    
    div.innerHTML="<b>"+p[0]+"</b><br>";
    
    p.slice(1).forEach(op=>{
    div.innerHTML+=`<input type="radio" name="q${i}" value="${op[1]}"> ${op[0]}<br>`;
    });
    
    form.appendChild(div);
    
    });
    
    function calcular(){
    
    let resultados={
    contador:0,
    grafico:0,
    web:0,
    mecatronica:0,
    electricidad:0,
    turismo:0,
    admin:0,
    secretariado:0
    };
    
    let respuestas=document.querySelectorAll("input[type=radio]:checked");
    
    respuestas.forEach(r=>{
    resultados[r.value]++;
    });
    
    let total=respuestas.length;
    
    let nombres={
    contador:"Perito Contador",
    grafico:"Diseño Gráfico",
    web:"Diseño Web",
    mecatronica:"Mecatrónica",
    electricidad:"Electricidad",
    turismo:"Turismo y Hotelería",
    admin:"Administración de Empresas",
    secretariado:"Secretariado"
    };
    
    let html="<h2>Resultados Vocacionales</h2>";
    
    for(let carrera in resultados){
    
    let porcentaje=Math.round((resultados[carrera]/total)*100);
    
    html+=`
    <p><b>${nombres[carrera]}</b> - ${porcentaje}%</p>
    <div class="bar" style="width:${porcentaje}%"></div>
    `;
    
    }
    
    document.getElementById("resultado").innerHTML=html;
    
    }