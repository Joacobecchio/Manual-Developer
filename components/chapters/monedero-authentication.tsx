function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="chapter-section">
      <h2>{title}</h2>
      {children}
    </section>
  );
}

export function MonederoAuthenticationChapter() {
  return (
    <>
      <h1>¿Cómo resolviste la autenticación y la seguridad en Monedero?</h1>
      <p>
        Esta pregunta no se responde diciendo solamente “usé Supabase Auth”. Tenés que explicar cómo se identifica al
        usuario, cómo se mantiene su sesión y qué impide que acceda a movimientos que no le pertenecen.
      </p>

      <Section title="Respuesta breve de entrevista">
        <div className="callout">
          En Monedero utilicé Supabase Auth para registro, inicio de sesión, recuperación de contraseña y proveedores
          OAuth como Google y Apple. La aplicación escucha los cambios de sesión y adapta la navegación según exista o
          no un usuario autenticado. La seguridad de los datos no depende solamente del frontend: cada registro se
          relaciona con el identificador del usuario y las tablas usan Row Level Security para permitir que cada persona
          consulte o modifique únicamente sus propios datos.
        </div>
      </Section>

      <Section title="Autenticación, autorización y sesión">
        <p><strong>Autenticación</strong> responde quién es el usuario: email y contraseña, Google o Apple.</p>
        <p><strong>Sesión</strong> representa que esa identidad continúa validada entre aperturas de la aplicación.</p>
        <p><strong>Autorización</strong> define qué datos y operaciones puede realizar ese usuario autenticado.</p>
        <p>
          Un error frecuente es considerar que ocultar una pantalla ya protege los datos. La interfaz puede bloquear el
          acceso visual, pero la autorización real debe aplicarse en el backend y en la base de datos.
        </p>
      </Section>

      <Section title="Flujo general">
        <ol>
          <li>El usuario se registra o inicia sesión mediante un proveedor soportado.</li>
          <li>Supabase valida las credenciales y devuelve una sesión con tokens.</li>
          <li>La aplicación recupera o escucha esa sesión para decidir la navegación inicial.</li>
          <li>Las consultas se realizan con el contexto del usuario autenticado.</li>
          <li>PostgreSQL y RLS verifican si ese usuario puede leer, insertar, actualizar o eliminar cada fila.</li>
          <li>Al cerrar sesión se limpia el estado relacionado y se vuelve al flujo público.</li>
        </ol>
      </Section>

      <Section title="Por qué RLS es central">
        <p>
          Row Level Security permite aplicar políticas por fila. En una tabla de transacciones, la regla conceptual es
          que el <code>user_id</code> del registro debe coincidir con el identificador del usuario autenticado.
        </p>
        <div className="callout">
          No confío en que el cliente envíe correctamente el usuario. La política de la base compara la identidad de la
          sesión con el propietario del registro. Así, incluso una consulta manipulada desde fuera de la interfaz debería
          ser rechazada.
        </div>
      </Section>

      <Section title="Políticas que deberían existir">
        <ul>
          <li><strong>SELECT:</strong> leer solamente registros propios.</li>
          <li><strong>INSERT:</strong> crear registros asociados al usuario autenticado.</li>
          <li><strong>UPDATE:</strong> modificar solamente registros propios y evitar cambiar su propietario.</li>
          <li><strong>DELETE:</strong> eliminar solamente registros propios.</li>
        </ul>
        <p>
          Las políticas deben revisarse tabla por tabla: transacciones, cuentas, tarjetas, metas de ahorro y cualquier
          entidad que contenga información privada.
        </p>
      </Section>

      <Section title="Email, Google y Apple">
        <p>
          Soportar varios proveedores mejora la experiencia, pero agrega casos borde. Una misma persona puede intentar
          registrarse con email y luego entrar con Google usando la misma dirección. También hay que manejar cancelaciones
          del proveedor, redirecciones, errores de red y requisitos específicos de Apple.
        </p>
        <p>
          La aplicación no debería asumir que todos los proveedores entregan exactamente los mismos metadatos ni que el
          nombre o la foto siempre estarán disponibles.
        </p>
      </Section>

      <Section title="Recuperación y confirmación de cuenta">
        <ul>
          <li>El registro puede requerir confirmación del correo antes de habilitar el acceso completo.</li>
          <li>El enlace de recuperación debe volver a una ruta válida de la aplicación.</li>
          <li>La nueva contraseña debe validarse y la UI debe comunicar claramente éxito, expiración o error.</li>
          <li>No se debe revelar innecesariamente si una dirección específica existe en el sistema.</li>
        </ul>
      </Section>

      <Section title="Manejo seguro en el cliente">
        <ul>
          <li>No incluir claves de servicio o credenciales administrativas dentro de la aplicación.</li>
          <li>Usar únicamente claves públicas pensadas para clientes y proteger los datos con RLS.</li>
          <li>No registrar tokens, contraseñas ni datos financieros sensibles en logs.</li>
          <li>Limpiar estado privado al cerrar sesión o cambiar de usuario.</li>
          <li>Tratar la sesión como asíncrona para evitar mostrar datos anteriores durante la inicialización.</li>
        </ul>
      </Section>

      <Section title="Tradeoffs de Supabase Auth">
        <ul>
          <li>Acelera mucho el desarrollo y evita implementar almacenamiento de contraseñas.</li>
          <li>Reduce infraestructura propia, pero genera dependencia del proveedor.</li>
          <li>RLS ofrece una defensa fuerte, aunque una política incompleta puede exponer información.</li>
          <li>OAuth simplifica el ingreso, pero exige manejar deep links y diferencias entre plataformas.</li>
        </ul>
      </Section>

      <Section title="Cómo probaría este módulo">
        <ul>
          <li>Registro válido, inválido, duplicado y pendiente de confirmación.</li>
          <li>Login correcto, contraseña incorrecta y usuario inexistente.</li>
          <li>Google y Apple: éxito, cancelación y error del proveedor.</li>
          <li>Persistencia de sesión al cerrar y reabrir la aplicación.</li>
          <li>Expiración o renovación de sesión.</li>
          <li>Logout con limpieza completa de datos en memoria.</li>
          <li>Intento del usuario A de leer, editar o borrar datos del usuario B.</li>
          <li>Recuperación de contraseña con enlace válido, vencido o reutilizado.</li>
        </ul>
      </Section>

      <Section title="Repreguntas difíciles">
        <ul>
          <li>¿Cuál es la diferencia entre autenticación y autorización?</li>
          <li>¿Por qué una clave pública de Supabase puede estar en el cliente?</li>
          <li>¿Qué ocurriría si desactivaras RLS?</li>
          <li>¿Cómo evitarías que un usuario cambie el user_id de una transacción?</li>
          <li>¿Dónde guardarías una service role key?</li>
          <li>¿Qué pasa con la UI mientras todavía se está recuperando la sesión?</li>
          <li>¿Cómo verificarías que el logout no deje información privada visible?</li>
        </ul>
      </Section>

      <Section title="Errores que no debés afirmar">
        <ul>
          <li>“Supabase ya es seguro por defecto, no necesito políticas”.</li>
          <li>“Como oculto la pantalla, otro usuario no puede acceder”.</li>
          <li>“El token se encripta desde el frontend y con eso alcanza”.</li>
          <li>“OAuth elimina la necesidad de manejar sesiones y errores”.</li>
          <li>“La anon key es una contraseña secreta”.</li>
        </ul>
      </Section>

      <Section title="Ejercicio">
        <p>
          Explicá en 90 segundos el flujo completo desde que una persona toca “Ingresar con Google” hasta que ve sus
          movimientos. Incluí identidad, sesión, consulta, RLS, error y cierre de sesión.
        </p>
        <div className="callout"><strong>Nivel actual:</strong> ⭐☆☆☆☆ · Pendiente de explicación propia y revisión de las políticas reales.</div>
      </Section>
    </>
  );
}
