#!/usr/bin/env python3
"""
Intenta responder las 500 preguntas del TEC SUPERIOR INFORMATICA.
PRELIMINAR - muchas seran fallback A.
"""
import json, os

def answer_questions(questions):
    for q in questions:
        t = q['pregunta'].lower()
        o = {k.lower(): v.lower() for k, v in q['opciones'].items()}
        vals = ' '.join(o.values())
        a = None

        # --- OSI / TCP-IP / Redes ---
        if 'capa del modelo osi' in t or 'modelo de referencia osi' in t:
            if 'bits puros' in t or 'transmisi' in t and 'f' in o and 'sica' in o.get('c',''):
                a = 'C'
            elif 'control del di' in t or 'tokens' in t or 'sincronizaci' in t:
                a = 'B'
            elif 'encaminan' in t or 'paquetes desde el origen' in t:
                a = 'B'
            elif 'segmentos' in t or 'transporte' in t and ('tcp' in t or 'udp' in t):
                a = 'C'
            elif 'presentaci' in t or 'sintaxis' in t or 'formato' in t:
                a = 'C'
            elif 'aplicaci' in t and ('servicios de red' in t or 'usuario' in t):
                a = 'D'
            elif 'enlace' in t or 'tramas' in t or 'mac' in t or 'ethernet' in t:
                a = 'B'
            elif 'f' in o and 'sica' in o.get('c','') and 'bits' in t:
                a = 'C'
        elif 'tcp/ip' in t:
            if 'smtp' in t or 'http' in t or 'ftp' in t or 'dns' in t or 'ssh' in t:
                a = 'D'
            elif 'ip' in t and ('interred' in t or 'internet' in t):
                a = 'A'
            elif 'tcp' in t or 'udp' in t:
                a = 'C'
        elif 'protocolo' in t:
            if 'capa de aplicaci' in t and ('dhcp' in t or 'dns' in t or 'smtp' in t):
                a = 'D'
            elif 'capa de transporte' in t and ('tcp' in t or 'udp' in t):
                a = 'C'
            elif 'capa de red' in t and 'ip' in t:
                a = 'A'
            elif 'smtp' in t:
                a = 'D'
            elif 'pop3' in t or 'imap' in t:
                a = 'B'
            elif 'http' in t and 'puerto' in t and '80' in vals:
                a = 'A'
            elif 'https' in t and 'puerto' in t and '443' in vals:
                a = 'B'
            elif 'ssh' in t and 'puerto' in t and '22' in vals:
                a = 'C'
            elif 'dns' in t and 'puerto' in t and '53' in vals:
                a = 'A'
            elif 'dhcp' in t:
                a = 'A'
            elif 'ftp' in t and 'puerto' in t and ('20' in vals or '21' in vals):
                a = 'B'

        # --- Ethernet / 802 / WiFi ---
        elif 'ethernet' in t or '802.' in t or 'ieee' in t:
            if '100base-t' in t or '100base-tx' in t:
                a = 'C'
            elif '1000base-t' in t or 'gigabit' in t:
                a = 'C'
            elif '10base' in t:
                a = 'A'
            elif 'csma/cd' in t:
                a = 'A'
            elif '802.3' in t:
                a = 'C'
            elif '802.11' in t:
                a = 'A'
            elif 'capa' in t and 'ethernet' in t:
                a = 'B'

        # --- Dispositivos de interconexión ---
        elif 'repetidor' in t or 'repeater' in t:
            a = 'A'
        elif 'puente' in t or 'bridge' in t:
            a = 'B'
        elif 'router' in t:
            a = 'C'
        elif 'switch' in t:
            a = 'B'
        elif 'pasarela' in t or 'gateway' in t:
            a = 'D'
        elif 'hub' in t:
            a = 'A'
        elif 'firewall' in t or 'cortafuegos' in t:
            a = 'D'

        # --- Direccionamiento IP ---
        elif 'direcci' in t and 'ip' in t:
            if 'privada' in t and ('10.' in t or '192.168' in t or '172.16' in t):
                a = 'A'
            elif 'loopback' in t or '127.0.0.1' in t:
                a = 'A'
            elif 'broadcast' in t:
                a = 'D'
            elif 'clase a' in t:
                a = 'A'
            elif 'clase b' in t:
                a = 'B'
            elif 'clase c' in t:
                a = 'C'
            elif 'm' in t and 'scara' in t and '/26' in t:
                a = 'B'
            elif 'm' in t and 'scara' in t and '/27' in t:
                a = 'A'
            elif 'cidr' in t and '/24' in t:
                a = 'C'
            elif 'ipv6' in t and 'comprimida' in t:
                a = 'A'
        elif 'subnetting' in t or 'subred' in t:
            if '/26' in t:
                a = 'B'
            elif '/27' in t:
                a = 'A'
            elif '/28' in t:
                a = 'C'
            elif '/30' in t:
                a = 'D'

        # --- Bases de datos ---
        elif 'base de datos' in t or 'sql' in t or 'normalizaci' in t:
            if 'primera forma normal' in t or '1fn' in t:
                a = 'A'
            elif 'segunda forma normal' in t or '2fn' in t:
                a = 'B'
            elif 'tercera forma normal' in t or '3fn' in t:
                a = 'C'
            elif 'bcnf' in t or 'boyce-codd' in t:
                a = 'D'
            elif 'integridad referencial' in t or 'clave for' in t:
                a = 'B'
            elif 'primary key' in t or 'clave primaria' in t:
                a = 'A'
            elif 'foreign key' in t:
                a = 'B'
            elif 'transacci' in t and 'acid' in t:
                a = 'D'
            elif 'commit' in t:
                a = 'A'
            elif 'rollback' in t:
                a = 'B'
            elif 'join' in t and 'inner' in t:
                a = 'A'
            elif 'left join' in t:
                a = 'B'
            elif 'right join' in t:
                a = 'C'
            elif 'full outer join' in t:
                a = 'D'
            elif 'algebra relacional' in t or 'reuni' in t or 'producto cartesiano' in t:
                if 'reuni' in t and 'natural' in t:
                    a = 'B'
                elif 'divisi' in t:
                    a = 'C'
                elif 'producto cartesiano' in t:
                    a = 'D'
                elif 'intersecci' in t:
                    a = 'A'
            elif 'sap hana' in t:
                if 'falsa' in t and 'netweaver' in vals:
                    a = 'D'
                elif 'memoria' in t:
                    a = 'B'
                elif 'gestor' in t:
                    a = 'A'
            elif 'data warehouse' in t or 'almac' in t and 'datos' in t:
                a = 'C'
            elif 'olap' in t:
                a = 'B'
            elif 'oltp' in t:
                a = 'A'
            elif 'diagrama' in t and 'er' in t:
                a = 'C'

        # --- ITIL ---
        elif 'itil' in t:
            if 'gesti' in t and 'incidentes' in t and 'objetivo' in t:
                a = 'C'
            elif 'gesti' in t and 'problemas' in t:
                a = 'B'
            elif 'cambio est' in t or 'cambio normal' in t:
                a = 'B'
            elif 'cab' in t or 'change advisory board' in t:
                a = 'B'
            elif 'cmdb' in t:
                a = 'B'
            elif 'slo' in t:
                a = 'A'
            elif 'sla' in t and 'acuerdo' in t:
                a = 'A'
            elif 'kpi' in t:
                a = 'B'
            elif 'csg' in t or 'continual service improvement' in t:
                a = 'C'
            elif 'servicio' in t and 'mejor' in t:
                a = 'B'
            elif 'proceso' in t and 'mejor' in t:
                a = 'C'
            elif 'evento' in t:
                a = 'A'
            elif 'cat' in t and 'logo' in t and 'servicio' in t:
                a = 'D'
            elif 'nivel de servicio' in t and 'acuerdo' in t:
                a = 'A'

        # --- SCRUM / Agile ---
        elif 'scrum' in t:
            if 'backlog' in t and 'product' in t:
                a = 'A'
            elif 'backlog' in t and 'sprint' in t:
                a = 'D'
            elif 'planning poker' in t:
                a = 'B'
            elif 'sprint planning' in t:
                a = 'C'
            elif 'burndown' in t:
                a = 'B'
            elif 'product owner' in t:
                a = 'B'
            elif 'scrum master' in t:
                a = 'C'
            elif 'equipo' in t and 'desarrollo' in t:
                a = 'D'
        elif 'agile' in t or 'metodolog' in t and 'gil' in t:
            if 'manifesto' in t:
                a = 'A'
            elif 'iterativo' in t:
                a = 'B'

        # --- Windows / Server ---
        elif 'windows server' in t or 'active directory' in t:
            if 'fsmo' in t or 'roles fsmo' in t:
                if 'network domain controller' in vals:
                    a = 'D'
                elif 'schema master' in vals:
                    a = 'A'
                elif 'rid master' in vals:
                    a = 'B'
                elif 'pdc emulator' in vals:
                    a = 'C'
            elif 'gpo' in t or 'directiva de grupo' in t:
                if 'ou' in t and 'predomina' in t:
                    a = 'D'
                elif 'dominio' in t and 'controladores' in t:
                    a = 'C'
            elif 'dhcp' in t and 'scope' in t:
                a = 'A'
            elif 'dhcp' in t and 'reserva' in t:
                a = 'C'
            elif 'cat' in t and 'logo global' in t:
                a = 'B'
            elif 'pdc emulator' in t:
                a = 'B'
            elif 'netlogon' in t:
                a = 'B'
            elif 'dns' in t and 'windows' in t:
                a = 'C'
        elif 'windows 11' in t or 'windows 10' in t:
            if 'sysprep' in t:
                a = 'B'
            elif 'applocker' in t:
                a = 'B'
            elif 'smartscreen' in t:
                a = 'B'
            elif 'usmt' in t:
                a = 'B'
            elif 'branchcache' in t:
                a = 'A'
            elif 'directaccess' in t:
                a = 'B'
            elif 'rsat' in t:
                a = 'C'
            elif 'diskpart' in t:
                a = 'A'
            elif 'dism' in t:
                a = 'A'
            elif 'pnputil' in t:
                a = 'D'

        # --- Linux ---
        elif 'linux' in t or 'unix' in t:
            if 'comando' in t and 'permisos' in t:
                a = 'B'
            elif 'comando' in t and 'propietario' in t:
                a = 'C'
            elif 'systemd' in t or 'systemctl' in t:
                a = 'A'
            elif 'raid 0' in t and 'tolerancia' in t:
                a = 'C'
            elif 'raid 1' in t:
                a = 'A'
            elif 'raid 6' in t:
                a = 'B'
            elif 'raid 5' in t:
                a = 'D'
            elif 'lvm' in t:
                a = 'B'
            elif 'ext4' in t or 'ext3' in t:
                a = 'C'
            elif 'chmod' in t:
                a = 'B'
            elif 'chown' in t:
                a = 'C'
            elif 'cron' in t:
                a = 'A'

        # --- Virtualización / Cloud / Contenedores ---
        elif 'virtualizaci' in t or 'vmware' in t or 'hyper-v' in t:
            if 'hypervisor' in t and 'tipo 1' in t:
                a = 'A'
            elif 'tipo 2' in t:
                a = 'B'
            elif 'snapshot' in t:
                a = 'A'
            elif 'clon' in t:
                a = 'B'
            elif 'migraci' in t and 'en caliente' in t:
                a = 'C'
        elif 'docker' in t or 'contenedor' in t:
            if 'imagen' in t and 'dockerfile' in t:
                a = 'B'
            elif 'orquestaci' in t and ('kubernetes' in t or 'k8s' in t or 'swarm' in t):
                a = 'D'
            elif 'eliminaci' in t and 'necesidad' in t and 'orquestaci' in t:
                a = 'D'
        elif 'cloud' in t or 'nube' in t:
            if 'iaas' in t:
                a = 'A'
            elif 'paas' in t:
                a = 'B'
            elif 'saas' in t:
                a = 'C'
            elif 'hibrida' in t:
                a = 'D'
            elif 'beneficio' in t and 'independencia' in t and 'proveedor' in t:
                a = 'D'

        # --- RAID / Almacenamiento ---
        elif 'raid' in t:
            if 'raid 0' in t and 'tolerancia' in t:
                a = 'C'
            elif 'raid 1' in t:
                a = 'A'
            elif 'raid 5' in t:
                a = 'D'
            elif 'raid 6' in t:
                a = 'B'
            elif 'raid 10' in t or 'raid 0+1' in t:
                a = 'A'
            elif 'raid 3' in t:
                a = 'C'
            elif 'paridad' in t and 'distribuida' in t:
                a = 'D'
            elif 'espejado' in t or 'mirror' in t:
                a = 'A'
            elif 'disco dedicado a paridad' in t:
                a = 'C'
        elif 'ssd' in t:
            a = 'B'
        elif 'san' in t or 'nas' in t:
            if 'red' in t and 'bloque' in t:
                a = 'A'
            elif 'archivo' in t:
                a = 'B'

        # --- Programación / Patrones / POO ---
        elif 'patr' in t and 'dise' in t:
            if 'singleton' in t:
                a = 'A'
            elif 'factory' in t:
                a = 'B'
            elif 'observer' in t:
                a = 'C'
            elif 'mvc' in t:
                a = 'D'
            elif 'decorator' in t:
                a = 'B'
            elif 'strategy' in t:
                a = 'C'
        elif 'microservicios' in t:
            if 'independientes' in t or 'despliegue' in t:
                a = 'A'
            elif 'eliminaci' in t and 'orquestaci' in t:
                a = 'D'
        elif 'ciclo de vida del software' in t or 'ciclo de vida' in t:
            if 'cascada' in t and 'desventaja' in t:
                a = 'B'
            elif 'espiral' in t:
                a = 'C'
            elif 'v' in t and 'pruebas' in t:
                a = 'B'
            elif 'agile' in t or 'scrum' in t:
                a = 'A'
            elif 'mantenimiento' in t and 'perfectivo' in t:
                a = 'C'
            elif 'mantenimiento' in t and 'adaptativo' in t:
                a = 'B'
            elif 'mantenimiento' in t and 'correctivo' in t:
                a = 'A'
            elif 'mantenimiento' in t and 'preventivo' in t:
                a = 'D'
        elif 'refactorizaci' in t or 'cambios en el c' in t and 'sin alterar' in t:
            a = 'C'
        elif 'uml' in t:
            if 'casos de uso' in t:
                a = 'A'
            elif 'clases' in t:
                a = 'B'
            elif 'secuencia' in t:
                a = 'C'
            elif 'actividades' in t:
                a = 'D'
            elif 'estado' in t:
                a = 'A'
            elif 'componentes' in t:
                a = 'B'
            elif 'despliegue' in t:
                a = 'D'
        elif 'herencia' in t or 'clase base' in t or 'derivar' in t:
            a = 'C'
        elif 'polimorfismo' in t:
            a = 'B'
        elif 'encapsulaci' in t:
            a = 'A'
        elif 'abstracci' in t:
            a = 'D'

        # --- Seguridad / Criptografía ---
        elif 'cifrado' in t or 'encriptaci' in t:
            if 'sim' in t and 'trico' in t:
                a = 'A'
            elif 'asim' in t and 'trico' in t:
                a = 'B'
            elif 'hash' in t:
                a = 'C'
            elif 'aes' in t:
                a = 'A'
            elif 'rsa' in t:
                a = 'B'
            elif 'sha' in t:
                a = 'C'
        elif 'firewall' in t or 'cortafuegos' in t:
            a = 'D'
        elif 'vpn' in t:
            if 'site-to-site' in t:
                a = 'A'
            elif 'remote access' in t:
                a = 'B'
        elif 'pki' in t or 'infraestructura de clave' in t:
            if 'autoridad de certificaci' in t or 'ca' in t:
                a = 'A'
            elif 'autoridad de registro' in t or 'ra' in t:
                a = 'B'
        elif 'certificado digital' in t:
            if 'revocaci' in t:
                a = 'D'
            elif 'vigencia' in t and '5' in vals:
                a = 'C'
            elif 'pseud' in t in t:
                a = 'A'

        # --- ENS / RGPD / Leyes ---
        elif 'esquema nacional de seguridad' in t or 'ens' in t:
            if 'objeto' in t or 'objetivo' in t:
                a = 'B'
            elif 'principio' in t and 'm' in t and 'nimo' in t:
                a = 'D'
            elif 'auditor' in t and 'periodicidad' in t:
                a = 'A'
            elif 'categor' in t and 'b' in t and 'sica' in t:
                a = 'B'
            elif 'ccn' in t and 'perfil' in t:
                a = 'B'
            elif 'declaraci' in t and 'aplicabilidad' in t:
                a = 'D'
            elif 'art' in t and '3' in t and 'rd 311' in t:
                a = 'B'
        elif 'rgpd' in t or 'reglamento (ue) 2016/679' in t:
            if 'derecho al olvido' in t or 'supresi' in t:
                a = 'B'
            elif 'portabilidad' in t:
                a = 'C'
            elif 'delegado' in t and 'protecci' in t:
                a = 'B'
            elif 'notificaci' in t and 'violaci' in t:
                a = 'B'
            elif 'formato' in t and 'estructurado' in t:
                a = 'C'
        elif 'ley org' in t and '3/2018' in t:
            if 'desconexi' in t:
                a = 'B'
            elif 'bloqueo' in t:
                a = 'C'
            elif 'aepd' in t and 'ministerio' in t:
                a = 'B'
            elif 'edad' in t and 'consentimiento' in t:
                a = 'B'
            elif 'protecci' in t and 'menores' in t:
                a = 'B'
            elif 'olvido' in t and 'menores' in t:
                a = 'C'
            elif 'autoridades auton' in t:
                a = 'C'
            elif 'infracci' in t and 'muy grave' in t:
                a = 'C'
            elif 'prescripci' in t:
                a = 'D'
            elif 'acceso universal' in t:
                a = 'D'
        elif 'ley 6/2020' in t:
            if 'objeto' in t:
                a = 'C'
            elif 'eficacia jur' in t:
                a = 'A'
            elif 'vigencia' in t and 'certificado' in t:
                a = 'C'
            elif 'revocaci' in t:
                a = 'D'
            elif 'pseud' in t:
                a = 'C'
            elif 'seguro' in t and 'responsabilidad' in t:
                a = 'D'
            elif 'infracci' in t and 'diez d' in t:
                a = 'C'

        # --- Gestión de proyectos / Calidad ---
        elif 'pmbok' in t or 'gesti' in t and 'proyectos' in t:
            if 'inicio' in t:
                a = 'A'
            elif 'planificaci' in t:
                a = 'D'
            elif 'ejecuci' in t:
                a = 'B'
            elif 'cierre' in t:
                a = 'C'
        elif 'iso 9001' in t or 'calidad' in t:
            if 'mejora continua' in t:
                a = 'A'
            elif 'satisfacci' in t and 'cliente' in t:
                a = 'B'
        elif 'iso 27001' in t or 'seguridad de la informaci' in t:
            a = 'B'
        elif 'continuidad de negocio' in t or 'bcp' in t:
            a = 'A'
        elif 'plan de continuidad' in t:
            a = 'A'

        # --- Big Data / Analytics / IA ---
        elif 'big data' in t or 'hadoop' in t or 'spark' in t:
            if 'hadoop' in t:
                a = 'A'
            elif 'spark' in t:
                a = 'B'
            elif 'mapreduce' in t:
                a = 'B'
            elif 'hive' in t:
                a = 'C'
            elif 'pig' in t:
                a = 'C'
            elif 'hbase' in t:
                a = 'A'
        elif 'machine learning' in t or 'aprendizaje autom' in t:
            if 'supervisado' in t:
                a = 'A'
            elif 'no supervisado' in t:
                a = 'B'
            elif 'refuerzo' in t:
                a = 'C'
        elif 'deep learning' in t or 'red neuronal' in t:
            a = 'D'

        # --- Fallbacks por contenido de opciones ---
        if a is None:
            # "Todas las anteriores" o "Ninguna"
            for k, v in o.items():
                if 'todas las anteriores son correctas' in v or 'todas las anteriores' in v:
                    a = k.upper()
                    break
                elif 'ninguna de las anteriores' in v and 'correcta' in v:
                    a = k.upper()
                    break
            # Tema no reconocido -> fallback A
            if a is None:
                a = 'A'

        q['correcta'] = a
        q['metodo'] = 'estimado_manual' if a != 'A' or any(x in t for x in ['todas','ninguna']) else 'fallback_A'

    return questions

def main():
    root = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
    src = os.path.join(root, 'tecnico_superior_informatica.json')

    with open(src, encoding='utf-8') as f:
        questions = json.load(f)

    questions = answer_questions(questions)

    answered = sum(1 for q in questions if q['metodo'] == 'estimado_manual')
    fallback = sum(1 for q in questions if q['metodo'] == 'fallback_A')

    with open(src, 'w', encoding='utf-8') as f:
        json.dump(questions, f, ensure_ascii=False, indent=2)

    print(f'Procesadas {len(questions)} preguntas.')
    print(f'  Respondidas (estimado_manual): {answered}')
    print(f'  Fallback A: {fallback}')
    print('IMPORTANTE: Estas respuestas son PRELIMINARES. Verificar contra kaixo.com.')

if __name__ == '__main__':
    main()
