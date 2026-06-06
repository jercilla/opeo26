#!/usr/bin/env python3
"""
Intenta responder las preguntas del TEC ESP INFORMATICA basandose en conocimiento.
Las respuestas son PRELIMINARES y deben verificarse contra kaixo.com.
"""
import json, os

def answer_questions(questions):
    # Diccionario de respuestas estimadas basado en conocimiento tecnico
    answers = {
        # Hardware
        1: 'B',   # IBM PC fue el exito notable
        2: 'C',   # Silicio
        3: 'A',   # FPM y BEDO son tipos de RAM
        4: 'D',   # Todas las anteriores (BIOS/UEFI)
        5: 'B',   # GPU procesa graficos
        6: 'C',   # Resolucion = pixels horizontales x verticales
        7: 'B',   # SATA, SAS, PCIe = interfaces de almacenamiento
        8: 'A',   # HAMR = Heat-Assisted Magnetic Recording
        9: 'D',   # SDHC y XQD son formatos de tarjeta de memoria
        10: 'D',  # Todas las anteriores (componentes netbooks)
        11: 'A',  # ALU = calculos con enteros y logicas
        12: 'B',  # Velocidad de acceso = tiempo minimo para ciclo de acceso
        13: 'B',  # DIMM y SO-DIMM
        14: 'C',  # Frecuencia de refresco = veces que se dibuja la pantalla por segundo
        15: 'C',  # Fabricacion costosa NO es ventaja de OLED
        16: 'D',  # RAID software, hardware y firmware
        17: 'B',  # SSD tiene alta resistencia a impactos
        18: 'B',  # CD = almacenamiento optico
        
        # Sistemas Operativos
        19: 'A',  # 2a Generacion = procesamiento por lotes
        20: 'C',  # UNIX = multiusuario y multitarea
        21: 'D',  # Time sharing en sistemas interactivos
        22: 'B',  # Monotarea = solo un proceso cada vez
        23: 'A',  # Sistemas centralizados NO comparten recursos
        24: 'C',  # THE = 5 niveles (0 al 4)
        25: 'B',  # Procesos de usuario = los que manda ejecutar el usuario
        26: 'A',  # FIFO = primero en llegar, primero en ejecutar
        27: 'A',  # Particionamiento = fijo o variable
        28: 'C',  # EXT2, EXT3, EXT4 en Linux
        
        # Redes
        29: 'B',  # OSI = 7 capas teoricas, TCP/IP = 4 practicas
        30: 'B',  # Centralizacion permite administrar recursos compartidos
        31: 'B',  # Broadcast = un canal compartido por todos
        32: 'D',  # Malla = mayor tolerancia a fallos
        33: 'D',  # IEEE 802.3 = Ethernet (asumiendo que la d es 802.3)
        34: 'D',  # Ancho de banda limita velocidad maxima
        35: 'C',  # Fibra optica monomodo = mayor inmunidad y distancia
        36: 'C',  # ARP = IP a MAC
        37: 'A',  # 2001:db8::1:2: es la forma comprimida
        38: 'C',  # Hub = nivel fisico, repite a todos
        39: 'B',  # /26 = broadcast 192.168.10.63
        40: 'A',  # /27 = 32 direcciones, 30 hosts
        41: 'C',  # Tabla de enrutamiento
        42: 'B',  # Zigbee = bajo consumo, malla, escalabilidad
        43: 'D',  # M2M, M2P, P2P = bidireccionales
        44: 'C',  # Capas independientes en OSI
        45: 'B',  # BLE = Broadcast y Mesh en v5
        46: 'C',  # Sensor a panel = M2M
        47: 'A',  # Telemetria NO es P2P
        48: 'C',  # Diferencia RFID = fuente de energia
        49: 'B',  # 10GBaseT
        50: 'B',  # IoE = objetos, datos, procesos, personas
        51: 'A',  # LoRaWAN = sub-1GHz, 20km, bajo consumo
        52: 'D',  # NFC/RFID NO cubren WAN
        53: 'D',  # Sensor mide -> control -> actuador
        
        # Desarrollo Software
        54: 'B',  # Analisis, diseno, codificacion, pruebas, mantenimiento
        55: 'B',  # Analisis = necesidades de usuarios
        56: 'A',  # 5 documentos: requisitos, diseno, codigo, pruebas, cambios
        57: 'B',  # Modelo V = analogo a cascada con vision jerarquizada
        58: 'C',  # Revision codificacion sobre codigo fuente
        59: 'C',  # Espiral = analisis de riesgo
        60: 'A',  # XP = Sencillez, Comunicacion, Retroalimentacion, Valentia
        61: 'D',  # Todas las anteriores (Plan de Garantia de Calidad)
        62: 'D',  # Control de cambios = NINGUNA (es gestion de configuracion)
        63: 'D',  # IDEE no es norma estandar
        64: 'D',  # 4 tipos de mantenimiento
        65: 'B',  # Perfectivo = mejorar propiedades
        66: 'C',  # Adaptativo = hardware y software
        67: 'D',  # Todas las anteriores (coste mantenimiento)
        68: 'C',  # Ley de Continuidad = proceso autorregulado
        69: 'D',  # Todas las anteriores (metodos mantenimiento)
        70: 'C',  # Procesos de acuerdo, organizacionales, gestion tecnica, tecnicos
        71: 'A',  # Adquisicion = obtener producto/servicio
        72: 'D',  # Todas las anteriores (fase implementacion mantenimiento)
        73: 'B',  # Planificacion = producir y coordinar planes
        74: 'C',  # Soporte logistico = recursos durante ciclo de vida
        75: 'B',  # Migracion = nuevo entorno
        
        # Windows 11 / Server 2022
        76: 'B',  # SmartScreen bloquea sitios maliciosos
        77: 'B',  # USMT para migrar perfiles
        78: 'C',  # Autenticacion simple = solo contrasena
        79: 'B',  # Contrasena de imagen = gestos sobre imagen
        80: 'A',  # Multidifusion en WDS
        81: 'B',  # Sysprep generaliza instalacion
        82: 'D',  # SideLoading = apps sin certificacion
        83: 'A',  # Cortana pierde funciones domoticas
        84: 'D',  # PnPUtil gestiona almacen central controladores
        85: 'A',  # DiskPart administra particiones
        86: 'A',  # BranchCache comparte sin saturar
        87: 'C',  # RSAT administra servidores
        88: 'B',  # AppLocker controla ejecucion basada en reglas
        89: 'D',  # Network Domain Controller NO es rol FSMO
        90: 'A',  # Scope DHCP = rango de IPs
        91: 'C',  # Reserva DHCP = IP permanente por MAC
        92: 'C',  # Grupo Universal = cualquier dominio del bosque
        93: 'B',  # Netlogon mantiene canal seguro
        94: 'D',  # GPO OU prevalece = rojo (Pediatria)
        95: 'B',  # PDC Emulator = sincroniza hora
        96: 'B',  # Catalogo Global = info parcial de todos los objetos del bosque
        97: 'B',  # Token contiene SID, comparado con DACL
        98: 'B',  # admx = estructura, adml = idioma
        99: 'C',  # Default Domain Policy = dominio, Default Domain Controllers = DCs
        100: 'D', # RAID 5 = datos y paridad distribuidos
        
        # Microsoft 365 / SharePoint / Teams
        101: 'C', # OneDrive = usuarios deciden compartir, admin gestiona derechos
        102: 'B', # Hilo de Ariadna = breadcrumb
        103: 'B', # Ordenacion por "modificado por" y fecha = exclusivo empresas
        104: 'B', # Almacen personal en todos los planes M365
        105: 'D', # Posible compartir con externos como invitados anonimos
        106: 'A', # Centro de documentos = reglas de enrutamiento
        107: 'A', # Extraer e insertar para evitar modificaciones simultaneas
        108: 'D', # Alerta = correo o SMS por modificacion
        109: 'B', # Forma geometrica depende de fechas introducidas
        110: 'A', # Home.aspx, modificable/eliminable
        111: 'C', # Teams = mensajeria, info, archivos, historial, reuniones, coedicion
        112: 'D', # Configuracion equipo = imagen, autorizaciones, menciones, emojis
        113: 'B', # 200 canales incluidos eliminados (restaurables 30 dias)
        
        # Seguridad Informatica
        114: 'B', # ISO 17799 = preservacion confidencialidad, integridad, disponibilidad
        115: 'C', # ISO 7498 = mecanismos que minimizan vulnerabilidad
        116: 'B', # Plano humano = sensibilizacion y formacion
        117: 'C', # Confidencialidad = solo legítimo destinatario lee
        118: 'A', # No repudiacion = demostrar autoria
        119: 'B', # Defensa en profundidad = varios niveles de seguridad
        120: 'B', # Etapa 1 = medidas basicas por sentido comun
        121: 'C', # Vulnerabilidad = debilidad que permite dano
        122: 'B', # Incidente = materializacion de amenaza
        123: 'B', # Medida pasiva = reduce impacto cuando ocurre
        124: 'C', # Base de la piramide = registros/evidencias
        125: 'C', # Minimos privilegios
        126: 'C', # RAID 0 = sin tolerancia a fallos
        127: 'D', # RAID 5 = mejor relacion rendimiento-coste empresarial
        128: 'C', # Baja = cancelar/bloquear cuentas inmediatamente
        129: 'D', # "Lo que se sabe" = contrasenas y PINs
        130: 'D', # "Danos significativos" = confidencial
        131: 'B', # VPN = confidencialidad, autenticidad, integridad
        132: 'C', # Ventana de vulnerabilidad
        133: 'C', # Dumpster diving
        134: 'D', # Facilitar aparatos de cifrado para control
        135: 'A', # Puertas traseras en fase de desarrollo
        136: 'B', # Bluesnarfing
        137: 'A', # OSSTMM = manual de auditoria
        138: 'B', # NASL = Nessus Attack Scripting Language
        
        # RGPD / LOPDGDD
        139: 'A', # RGPD = tratamiento automatizado y no automatizado en fichero
        140: 'B', # Integridad y confidencialidad = seguridad adecuada
        141: 'D', # Menores = 16 anos o consentimiento de representante
        142: 'B', # Fines del tratamiento y base juridica
        143: 'A', # Personas destinatarias de los datos
        144: 'B', # NO aplica olvido si necesario para reclamaciones
        145: 'C', # Portabilidad = estructurado, uso comun, lectura mecanica
        146: 'B', # Notificacion violacion = naturaleza, contacto, consecuencias, medidas
        147: 'A', # NO comunicar individual si datos ininteligibles (cifrado)
        148: 'B', # DPO = asesorar sobre evaluacion de impacto
        149: 'B', # Reclamacion en estado de residencia, trabajo o infraccion
        150: 'C', # Indemnizacion de responsable o encargado
        151: 'B', # Prohibicion expresa NO afecta datos patrimoniales de herederas
        152: 'A', # Menores 14 anos = patria potestad
        153: 'A', # Videovigilancia = fisicas/juridicas, publicas/privadas
        154: 'C', # Bloqueo = impedir tratamiento, disponible para jueces
        155: 'B', # AEPD relacionada con Ministerio de la Presidencia
        156: 'C', # Autonomicas = funciones publicas de su competencia
        157: 'D', # Inadmision = no versan sobre proteccion datos, carecen fundamento
        158: 'C', # Muy grave = tratamiento datos infracciones fuera de supuestos
        159: 'D', # Prescripcion reinicia tras 6 meses paralizacion
        160: 'D', # Acceso universal NO implica conexion gratuita obligatoria
        161: 'B', # Desconexion digital = politica interna con representantes
        162: 'B', # Menores en redes sociales = consentimiento de representantes
        163: 'C', # Olvido menores = supresion por simple solicitud
        
        # Ley 6/2020 (eIDAS)
        164: 'C', # Ley 6/2020 = servicios electronicos de confianza
        165: 'B', # Prestadores fuera de España con establecimiento permanente
        166: 'A', # Documentos electronicos = valor segun naturaleza
        167: 'C', # Certificado cualificado = 5 anos maximo
        168: 'D', # Violacion secreto = revocacion certificado
        169: 'B', # Revocacion = motivos, fecha y hora
        170: 'A', # Titular fisico = nombre + DNI/NIE/NIF o pseudonimo
        171: 'C', # Prescindir personacion si certificado previo del mismo prestador
        172: 'D', # Videoconferencia = si, con seguridad equivalente
        173: 'C', # Pseudonimo = constatar verdadera identidad
        174: 'D', # Seguro responsabilidad civil = 2.000.000 euros
        175: 'C', # Grave si no resuelve en 10 dias
        
        # ITIL 4
        176: 'A', # Cambio abarca elementos de configuracion o servicios
        177: 'B', # Cambio estandar = autorizado con antelacion, procedimientos predefinidos
        178: 'C', # Gestor de cambios NO debe ser desconocido
        179: 'D', # CAB permanente = gestor, propietario servicio, representante lanzamiento
        180: 'C', # Incidentes = restablecer servicio y minimizar impacto
        181: 'B', # Prioridad = impacto y urgencia
        182: 'C', # Normal = como fue concebido, degradado = calidad inferior
        183: 'D', # Escalada funcional y jerarquica
        184: 'D', # Todas las anteriores (gestion cambios)
        185: 'B', # Incidentes = tiempo real
        186: 'D', # Gestion problemas NO gestiona incidentes graves transformados
        187: 'D', # Solicitudes de servicio = canal para pedidos
        188: 'C', # Minimizar impacto del incidente (NO, eso es gestion incidentes)
        
        # Esquema Nacional de Seguridad (ENS)
        189: 'B', # ENS = principios basicos y requisitos minimos
        190: 'C', # Privado = presta servicios a sector publico
        191: 'C', # Externalizacion obligatoria NO es principio
        192: 'A', # Politica seguridad = roles, funciones, deberes, responsabilidades
        193: 'D', # Minimo privilegio = funcionalidad imprescindible
        194: 'D', # Declaracion de Aplicabilidad
        195: 'A', # Auditoria cada 2 anos
        196: 'B', # Basica = autoevaluacion
        197: 'B', # CCN valida perfiles de cumplimiento
        198: 'C', # Dimensiones = disponibilidad, autenticidad, integridad, confidencialidad, trazabilidad
        199: 'A', # Grupos = marco organizativo, operacional, medidas de proteccion
        200: 'B', # CCN-CERT puede requerir informacion necesaria
    }

    for q in questions:
        num = q['num']
        if num in answers:
            q['correcta'] = answers[num]
            q['metodo'] = 'estimado_manual'
        else:
            q['correcta'] = 'A'  # Fallback
            q['metodo'] = 'fallback_A'
    return questions

def main():
    root = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
    src = os.path.join(root, 'tecnico_informatica.json')
    dst = os.path.join(root, 'tecnico_informatica.json')

    with open(src, encoding='utf-8') as f:
        questions = json.load(f)

    questions = answer_questions(questions)

    with open(dst, 'w', encoding='utf-8') as f:
        json.dump(questions, f, ensure_ascii=False, indent=2)

    # Contar cuantas tienen respuesta estimada vs fallback
    estimadas = sum(1 for q in questions if q['metodo'] == 'estimado_manual')
    fallback = sum(1 for q in questions if q['metodo'] == 'fallback_A')
    print(f'Generado {dst}: {estimadas} respuestas estimadas, {fallback} fallback a A.')
    print('IMPORTANTE: Estas respuestas son PRELIMINARES. Verificar contra kaixo.com.')

if __name__ == '__main__':
    main()
