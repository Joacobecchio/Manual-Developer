function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="chapter-section">
      <h2>{title}</h2>
      {children}
    </section>
  );
}

export function MonederoStateDataChapter() {
  return (
    <>
      <h1>¿Cómo manejás el estado, los datos y la sincronización en Monedero?</h1>
      <p>
        Esta pregunta sirve para demostrar que no confundís estado de interfaz, datos remotos y lógica de negocio.
        También permite explicar cómo evitás inconsistencias entre Supabase, los stores y los componentes.
      </p>

      <Section title="Respuesta breve de entrevista">
        <div className="callout">
          En Monedero separo el estado local de cada pantalla, el estado global compartido y los datos persistidos en
          Supabase. Uso Zustand para información que varias pantallas necesitan, como filtros, preferencias o datos ya
          cargados, pero mantengo en estado local formularios y elementos temporales. Las operaciones de lectura y
          escritura pasan por servicios de datos. Después de crear, editar o eliminar un movimiento, actualizo la fuente
          correspondiente y recalculo la información derivada para evitar que balances, gráficos y listas queden
          desincronizados.
        </div>
      </Section>

      <Section title="Tres tipos de estado que tenés que diferenciar">
        <ul>
          <li><strong>Estado local de UI:</strong> modal abierto, texto de búsqueda, paso actual o campos de formulario.</li>
          <li><strong>Estado global del cliente:</strong> moneda activa, tema, filtros compartidos, sesión o colecciones reutilizadas.</li>
          <li><strong>Estado remoto:</strong> transacciones, cuentas, tarjetas y objetivos guardados en PostgreSQL mediante Supabase.</li>
        </ul>
        <p>
          Globalizar todo genera stores difíciles de mantener. Mantener todo local produce duplicación y obliga a pasar
          props por demasiados niveles. La decisión depende de quién necesita el dato, cuánto dura y cuál es su fuente de verdad.
        </p>
      </Section>

      <Section title="Por qué Zustand">
        <p>
          Zustand ofrece una API pequeña, actualizaciones directas y selectores simples. Para el tamaño actual de Monedero
          permite compartir estado sin la ceremonia de reducers, actions y providers más complejos.
        </p>
        <p>
          La elección no significa que Zustand deba contener toda la base de datos. Supabase continúa siendo la fuente
          persistente. El store funciona como coordinación y caché del cliente, no como reemplazo del backend.
        </p>
      </Section>

      <Section title="Flujo de lectura de datos">
        <ol>
          <li>La pantalla o un controlador solicita los datos necesarios.</li>
          <li>Un servicio encapsula la consulta a Supabase.</li>
          <li>La respuesta se valida y transforma al modelo usado por la aplicación.</li>
          <li>Se actualiza el store o el estado de la pantalla.</li>
          <li>Los selectores calculan vistas derivadas como movimientos filtrados o totales visibles.</li>
        </ol>
        <p>
          Encapsular las consultas evita distribuir llamadas a Supabase por todos los componentes y facilita cambiar la
          implementación, agregar logs o probar la lógica con datos simulados.
        </p>
      </Section>

      <Section title="Flujo de una mutación">
        <p>
          Al crear un gasto, la aplicación valida el formulario, envía la operación a Supabase y solo considera confirmada
          la acción cuando el backend responde correctamente. Luego incorpora el movimiento al estado o vuelve a consultar
          los datos afectados. Finalmente actualiza balances, estadísticas y listas derivadas.
        </p>
        <p>
          Una actualización optimista puede hacer que la interfaz se sienta más rápida, pero necesita rollback cuando la
          escritura falla. Para operaciones financieras conviene priorizar consistencia y feedback claro antes que ocultar
          completamente la latencia.
        </p>
      </Section>

      <Section title="Balances y datos derivados">
        <p>
          El balance no debería convertirse en un número independiente que se modifica manualmente en muchos lugares. Es
          preferible derivarlo de transacciones y saldos definidos, o centralizar su actualización en una única función de dominio.
        </p>
        <ul>
          <li>Un ingreso suma dentro de la moneda y cuenta correspondientes.</li>
          <li>Un gasto resta en la fuente seleccionada.</li>
          <li>Una transferencia mueve valor entre cuentas propias sin alterar el patrimonio total.</li>
          <li>ARS y USD no deben mezclarse sin una regla explícita de conversión.</li>
          <li>Editar o eliminar una transacción debe revertir el efecto anterior antes de aplicar el nuevo.</li>
        </ul>
      </Section>

      <Section title="Filtros, búsqueda y performance">
        <p>
          Para volúmenes pequeños puede filtrarse en memoria después de cargar una colección razonable. Cuando la cantidad
          de movimientos crece, conviene aplicar filtros, paginación y ordenamiento desde la consulta para no descargar
          información innecesaria.
        </p>
        <ul>
          <li>Evitar recalcular listas costosas en cada render.</li>
          <li>Usar selectores específicos para que un componente no escuche todo el store.</li>
          <li>Debouncear búsquedas cuando disparan consultas remotas.</li>
          <li>Paginar historiales largos.</li>
          <li>Indexar en PostgreSQL columnas frecuentes como user_id, date, currency y category_id.</li>
        </ul>
      </Section>

      <Section title="Caché y revalidación">
        <p>
          Una caché mejora velocidad, pero introduce la pregunta de cuándo deja de ser válida. En Monedero se puede usar una
          estrategia simple: cargar al entrar, conservar datos durante la sesión y revalidar después de mutaciones o cuando
          la aplicación vuelve del background.
        </p>
        <p>
          Si el producto crece, una librería especializada como TanStack Query podría manejar caché remota, estados de
          loading, reintentos, invalidación y deduplicación. Zustand seguiría reservado para estado de cliente.
        </p>
      </Section>

      <Section title="Estrategia offline defendible">
        <p>
          Actualmente no alcanza con decir que Expo funciona sin conexión. Una estrategia offline real requiere persistir
          datos localmente, registrar operaciones pendientes y sincronizarlas al recuperar conectividad.
        </p>
        <ul>
          <li>Guardar una copia local de los datos necesarios.</li>
          <li>Asignar identificadores estables a nuevas operaciones.</li>
          <li>Mantener una cola con estados pendiente, sincronizando y fallida.</li>
          <li>Reintentar sin duplicar movimientos.</li>
          <li>Definir conflictos cuando el mismo registro cambió en dos dispositivos.</li>
          <li>Mostrar al usuario qué información aún no está sincronizada.</li>
        </ul>
      </Section>

      <Section title="Conflictos y consistencia">
        <p>
          Para datos financieros no conviene resolver todos los conflictos con “última escritura gana”. Se pueden usar
          timestamps y versiones para detectar cambios concurrentes. En casos ambiguos, es más seguro conservar ambos
          eventos o pedir intervención que sobrescribir silenciosamente información.
        </p>
      </Section>

      <Section title="Estados de carga y errores">
        <ul>
          <li>Mostrar skeletons durante la primera carga.</li>
          <li>Diferenciar lista vacía de error de red.</li>
          <li>Deshabilitar envíos duplicados mientras una mutación está en proceso.</li>
          <li>Informar si la acción falló y permitir reintentar.</li>
          <li>No borrar la información previa mientras se revalida en segundo plano.</li>
        </ul>
      </Section>

      <Section title="Casos de prueba importantes">
        <ul>
          <li>Crear, editar y eliminar ingresos y gastos.</li>
          <li>Verificar el balance después de cada mutación.</li>
          <li>Transferir entre cuentas sin modificar el total global.</li>
          <li>Cambiar entre ARS y USD sin mezclar movimientos.</li>
          <li>Aplicar varios filtros y luego limpiar todos.</li>
          <li>Recuperarse de una escritura fallida.</li>
          <li>Evitar duplicados por doble toque o reintento.</li>
          <li>Cerrar sesión y comprobar que el store no conserve datos del usuario anterior.</li>
        </ul>
      </Section>

      <Section title="Repreguntas técnicas">
        <ul>
          <li>¿Por qué no usaste Redux?</li>
          <li>¿Cuál es la fuente de verdad del balance?</li>
          <li>¿Cómo evitás datos obsoletos en el store?</li>
          <li>¿Qué diferencia hay entre Zustand y TanStack Query?</li>
          <li>¿Cómo implementarías actualizaciones optimistas?</li>
          <li>¿Cómo resolverías conflictos offline?</li>
          <li>¿Qué cambiarías con cien mil transacciones por usuario?</li>
        </ul>
      </Section>

      <Section title="Errores comunes en una entrevista">
        <ul>
          <li>Decir que Zustand es la base de datos.</li>
          <li>Afirmar que todos los estados deben ser globales.</li>
          <li>Confundir caché con persistencia permanente.</li>
          <li>Decir que la aplicación es offline porque conserva una pantalla abierta sin internet.</li>
          <li>Actualizar balances en varios componentes sin una regla centralizada.</li>
          <li>No contemplar rollback o errores en una actualización optimista.</li>
        </ul>
      </Section>

      <Section title="Ejercicio">
        <p>
          Dibujá el flujo completo de “crear gasto”: formulario, validación, servicio, Supabase, respuesta, store, balance,
          gráfico y feedback al usuario. Después explicá qué ocurre si la red falla en cada punto.
        </p>
        <div className="callout"><strong>Nivel actual:</strong> ⭐☆☆☆☆ · Pendiente de explicar el flujo sin mirar el manual.</div>
      </Section>
    </>
  );
}
