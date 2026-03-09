/*
Función auxiliar para comprobar si existe solución en el intervalo [a,b]:
f: funcion
a: valor inferior del intervalo
b: valor superior del intervalo
*/ 
function existeSolucion(f, a, b) {
    // Devuelve true si f(a)*f(b) < 0 y false en caso contrario
    if (f(a) * f(b) < 0) {
        return true;
    } else {
        return false;
    }
}

/*
Función principal que realiza el método de la Bisección:
f: funcion
a: extremo inferior del intervalo
b: extremo superior del intervalo
n: número de iteraciones
*/
function Biseccion(f, a, b, n) {
    // Llamamos a la función auxiliar para comprobar que existe solución en el intervalo [a,b]
    if (existeSolucion(f, a, b) == false) { // Si no existe solución, devolvemos error en consola y salimos de la función
        console.log("Error: No existe solución (raíz) en este intervalo.");
        return null;

    } else { // Si existe solución, aplicamos el método de la Bisección

        // Bucle for para realizar n iteraciones
        for (i = 0; i < n; i++) {
            // Calculamos el punto medio del intervalo
            m = (a + b) / 2;

            // Si f(m) = 0, m es la raíz y rompemos el bucle
            if (f(m) == 0) {
                break;
            // Si no, comprobamos en qué subintervalo se encuentra la raíz
            } else if (f(a) * f(m) < 0) {
                b = m; // La raíz está en [a,m] y actualizamos el extremo superior
            } else {
                a = m; // La raíz está en [m,b] y actualizamos el extremo inferior
            }
        }

        // Tras las n iteraciones, devolvemos la mejor aproximación obtenida
        return "La raíz aproximada calculada es: " + ((a + b) / 2).toString();
    }
}

// Comprobamos en la consola que la función para el método de la Bisección creada funciona:

// Para ello, utilzaremos como función continua la función f(x) = x^2 - 4 en el intervalo [0,5], que sabemos que tiene una raíz en x=2
function f(x) {
    return x * x - 4;
}

// Llamamos a la función Biseccion para obtener la mejor aproximación a la raíz de la función f en el intervalo [0,5] con 50 iteraciones
console.log(Biseccion(f, 0, 5, 50));