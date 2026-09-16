import React, { useState, useEffect } from 'react';
import { sfx } from '../utils/soundEffects';
import { 
  Brain, 
  Smartphone, 
  Globe, 
  Terminal, 
  Play, 
  RefreshCw, 
  Radio, 
  Database, 
  Zap, 
  Activity, 
  Wifi, 
  CheckCircle2, 
  Cpu,
  Layers
} from 'lucide-react';

export const InteractivePlayground: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'ai' | 'android' | 'fullstack'>('ai');

  // AI Streamer State
  const [selectedPrompt, setSelectedPrompt] = useState(0);
  const [isInferencing, setIsInferencing] = useState(false);
  const [streamedText, setStreamedText] = useState('');
  const [ragStats, setRagStats] = useState({ latency: '118ms', tokens: 0, model: 'Llama-3.2-3B-Instruct (Q4_K_M)', similarity: '0.892' });

  const aiPrompts = [
    {
      q: "Explain offline RAG vector retrieval with Milvus and Ollama.",
      response: "Offline RAG executes by embedding document chunks using a localized model (e.g. nomic-embed-text) into Milvus vector collections. When querying, the question is converted into high-dimensional embeddings, matched via Cosine similarity (0.892 score), and fed directly to local Llama-3.2 via Ollama runtime—yielding sub-150ms latency with 100% data confidentiality."
    },
    {
      q: "How do you achieve 120 FPS in Jetpack Compose with heavy state feeds?",
      response: "By enforcing immutable StateFlow streams, hoisting state out of hot layout passes, utilizing derivedStateOf for derived calculations, and deferring reads to the draw phase with Modifier.drawWithCache. This eliminates unnecessary recompositions, sustaining solid 120 FPS renders."
    },
    {
      q: "What is your architecture for resilient WebSocket telemetry under flaky network?",
      response: "The architecture implements an exponential backoff heartbeat mechanism with an in-memory client buffer. If the socket drops, outbound events are queued into IndexedDB / Room SQLite. Upon reconnect handshake, the client sends an acknowledged replay cursor to prevent duplicate event delivery."
    }
  ];

  const handleRunInference = () => {
    if (isInferencing) return;
    sfx.playClick();
    setIsInferencing(true);
    setStreamedText('');
    const fullText = aiPrompts[selectedPrompt].response;
    let index = 0;

    const timer = setInterval(() => {
      index += 3;
      if (index >= fullText.length) {
        setStreamedText(fullText);
        setIsInferencing(false);
        sfx.playSuccess();
        clearInterval(timer);
      } else {
        setStreamedText(fullText.slice(0, index));
        setRagStats((prev) => ({ ...prev, tokens: Math.floor(index / 4) }));
      }
    }, 28);
  };

  // Android Compose Emulator State
  const [composeCounter, setComposeCounter] = useState(42);
  const [isScanningBle, setIsScanningBle] = useState(false);
  const [discoveredDevices, setDiscoveredDevices] = useState([
    { name: "BLE-Sensor-Unit #14", rssi: -58, status: "Connected" },
    { name: "Industrial-Gate-ESP32", rssi: -72, status: "Paired" }
  ]);
  const [offlineSyncActive, setOfflineSyncActive] = useState(true);

  const handleScanBle = () => {
    sfx.playModeSwitch();
    setIsScanningBle(true);
    setTimeout(() => {
      setIsScanningBle(false);
      setDiscoveredDevices([
        { name: "BLE-Sensor-Unit #14", rssi: -54, status: "Connected" },
        { name: "Industrial-Gate-ESP32", rssi: -69, status: "Paired" },
        { name: `Telemetry-Node-X${Math.floor(Math.random() * 90 + 10)}`, rssi: -62, status: "Discovered" }
      ]);
      sfx.playSuccess();
    }, 900);
  };

  // Fullstack Event Streamer State
  const [eventLogs, setEventLogs] = useState<Array<{ id: number; topic: string; payload: string; time: string }>>([
    { id: 1, topic: "telemetry/stream", payload: '{"sensor_id":"SN-902","val":88.4,"status":"NORMAL"}', time: "14:22:01" },
    { id: 2, topic: "ops/batch_update", payload: '{"batch":"BT-504","units_processed":1420}', time: "14:22:02" },
    { id: 3, topic: "auth/session_heartbeat", payload: '{"user":"lead-architect","ping_ms":14}', time: "14:22:03" }
  ]);
  const [isStreamingEvents, setIsStreamingEvents] = useState(true);

  useEffect(() => {
    if (!isStreamingEvents) return;
    const interval = setInterval(() => {
      const now = new Date();
      const timeStr = now.toTimeString().split(' ')[0];
      const topics = ["telemetry/edge_node", "ai/inference_tick", "cache/redis_sync", "mobile/worker_heartbeat"];
      const newTopic = topics[Math.floor(Math.random() * topics.length)];
      const randomVal = (Math.random() * 100).toFixed(1);
      const newEvent = {
        id: Date.now(),
        topic: newTopic,
        payload: `{"metric":"rpm_or_load","val":${randomVal},"latency_us":${Math.floor(Math.random() * 400 + 120)}}`,
        time: timeStr
      };

      setEventLogs((prev) => [newEvent, ...prev.slice(0, 4)]);
    }, 2400);

    return () => clearInterval(interval);
  }, [isStreamingEvents]);

  return (
    <section id="playground" style={{ padding: '6rem 0', position: 'relative' }}>
      <div className="container-custom">
        {/* Section Header */}
        <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              padding: '0.35rem 0.95rem',
              borderRadius: 'var(--radius-full)',
              background: 'rgba(6, 182, 212, 0.1)',
              border: '1px solid rgba(6, 182, 212, 0.3)',
              color: 'var(--accent-cyan)',
              fontSize: '0.8rem',
              fontFamily: 'var(--font-mono)',
              marginBottom: '1rem',
            }}
          >
            <Zap size={14} />
            <span>INTERACTIVE ARCHITECTURE SANDBOX</span>
          </div>

          <h2 style={{ fontSize: 'clamp(2.2rem, 4vw, 3.25rem)', fontWeight: 800, marginBottom: '1rem' }}>
            Live System <span className="text-gradient-purple">Proof of Work</span>.
          </h2>

          <p style={{ color: 'var(--text-secondary)', maxWidth: '680px', margin: '0 auto', fontSize: '1.05rem', lineHeight: 1.7 }}>
            Experience actual software behaviors right inside the browser—demonstrating local open-source LLM streaming, native Android Compose states, and high-throughput real-time pipelines.
          </p>

          {/* Tab Switcher */}
          <div
            style={{
              display: 'inline-flex',
              background: 'rgba(15, 18, 28, 0.8)',
              padding: '0.35rem',
              borderRadius: 'var(--radius-full)',
              border: '1px solid var(--border-subtle)',
              marginTop: '2.5rem',
              gap: '0.35rem',
            }}
          >
            <button
              onClick={() => {
                sfx.playModeSwitch();
                setActiveTab('ai');
              }}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                padding: '0.65rem 1.35rem',
                borderRadius: 'var(--radius-full)',
                border: 'none',
                background: activeTab === 'ai' ? 'linear-gradient(135deg, #6366f1 0%, #a855f7 100%)' : 'transparent',
                color: activeTab === 'ai' ? '#ffffff' : 'var(--text-secondary)',
                fontWeight: 600,
                fontSize: '0.85rem',
                cursor: 'pointer',
                transition: 'all 0.2s',
              }}
            >
              <Brain size={16} />
              <span>1. Local AI & RAG Engine</span>
            </button>

            <button
              onClick={() => {
                sfx.playModeSwitch();
                setActiveTab('android');
              }}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                padding: '0.65rem 1.35rem',
                borderRadius: 'var(--radius-full)',
                border: 'none',
                background: activeTab === 'android' ? 'linear-gradient(135deg, #06b6d4 0%, #3b82f6 100%)' : 'transparent',
                color: activeTab === 'android' ? '#ffffff' : 'var(--text-secondary)',
                fontWeight: 600,
                fontSize: '0.85rem',
                cursor: 'pointer',
                transition: 'all 0.2s',
              }}
            >
              <Smartphone size={16} />
              <span>2. Kotlin Compose Mobile Frame</span>
            </button>

            <button
              onClick={() => {
                sfx.playModeSwitch();
                setActiveTab('fullstack');
              }}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                padding: '0.65rem 1.35rem',
                borderRadius: 'var(--radius-full)',
                border: 'none',
                background: activeTab === 'fullstack' ? 'linear-gradient(135deg, #10b981 0%, #059669 100%)' : 'transparent',
                color: activeTab === 'fullstack' ? '#ffffff' : 'var(--text-secondary)',
                fontWeight: 600,
                fontSize: '0.85rem',
                cursor: 'pointer',
                transition: 'all 0.2s',
              }}
            >
              <Activity size={16} />
              <span>3. Real-Time Event Bus</span>
            </button>
          </div>
        </div>

        {/* Sandbox Content Container */}
        <div
          className="glass-panel"
          style={{
            maxWidth: '1000px',
            margin: '0 auto',
            borderRadius: '24px',
            overflow: 'hidden',
            border: '1px solid rgba(99, 102, 241, 0.35)',
            boxShadow: '0 25px 60px -15px rgba(0, 0, 0, 0.9)',
          }}
        >
          {/* Top Window Bar */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              padding: '1rem 1.5rem',
              background: 'rgba(10, 13, 20, 0.9)',
              borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <div style={{ width: '11px', height: '11px', borderRadius: '50%', background: '#ef4444' }} />
              <div style={{ width: '11px', height: '11px', borderRadius: '50%', background: '#eab308' }} />
              <div style={{ width: '11px', height: '11px', borderRadius: '50%', background: '#22c55e' }} />
              <span style={{ fontSize: '0.8rem', fontFamily: 'var(--font-mono)', color: 'var(--text-muted)', marginLeft: '0.6rem' }}>
                {activeTab === 'ai' && 'runtime::ollama/vllm/rag-orchestrator'}
                {activeTab === 'android' && 'emulator::pixel8-pro-android14::compose'}
                {activeTab === 'fullstack' && 'broker::websocket-bus::cluster-01'}
              </span>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.75rem', fontFamily: 'var(--font-mono)', color: 'var(--accent-emerald)' }}>
              <span className="live-indicator" />
              <span>SANDBOX ACTIVE</span>
            </div>
          </div>

          {/* TAB 1: AI & RAG STREAMER */}
          {activeTab === 'ai' && (
            <div style={{ padding: '2rem' }}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '1.5rem' }} className="sandbox-grid">
                <div>
                  <div style={{ fontSize: '0.8rem', fontFamily: 'var(--font-mono)', color: 'var(--text-muted)', marginBottom: '0.75rem' }}>
                    SELECT TEST QUERY OR TOPIC:
                  </div>

                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem', marginBottom: '1.5rem' }}>
                    {aiPrompts.map((p, idx) => (
                      <button
                        key={idx}
                        onClick={() => {
                          sfx.playClick();
                          setSelectedPrompt(idx);
                          setStreamedText('');
                        }}
                        style={{
                          textAlign: 'left',
                          padding: '0.85rem 1.15rem',
                          borderRadius: '12px',
                          background: selectedPrompt === idx ? 'rgba(99, 102, 241, 0.15)' : 'rgba(255, 255, 255, 0.02)',
                          border: selectedPrompt === idx ? '1px solid rgba(99, 102, 241, 0.5)' : '1px solid rgba(255, 255, 255, 0.06)',
                          color: selectedPrompt === idx ? '#ffffff' : 'var(--text-secondary)',
                          fontSize: '0.9rem',
                          cursor: 'pointer',
                          transition: 'all 0.2s',
                        }}
                      >
                        {p.q}
                      </button>
                    ))}
                  </div>

                  <button
                    onClick={handleRunInference}
                    disabled={isInferencing}
                    className="btn-primary"
                    style={{ width: '100%', padding: '0.9rem' }}
                  >
                    <Play size={16} fill="currentColor" />
                    <span>{isInferencing ? 'Streaming Tokens from Local LLM...' : 'Run Local Inference Stream'}</span>
                  </button>
                </div>

                {/* Output Terminal Console */}
                <div
                  style={{
                    background: '#07090e',
                    borderRadius: '16px',
                    border: '1px solid rgba(255, 255, 255, 0.08)',
                    padding: '1.5rem',
                    display: 'flex',
                    flexDirection: 'column',
                    minHeight: '260px',
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1rem', borderBottom: '1px solid rgba(255, 255, 255, 0.06)', paddingBottom: '0.75rem' }}>
                    <div style={{ fontSize: '0.75rem', fontFamily: 'var(--font-mono)', color: 'var(--accent-cyan)' }}>
                      TARGET: {ragStats.model}
                    </div>
                    <div style={{ fontSize: '0.75rem', fontFamily: 'var(--font-mono)', color: 'var(--text-muted)' }}>
                      COSINE SIMILARITY: <span style={{ color: 'var(--accent-emerald)' }}>{ragStats.similarity}</span>
                    </div>
                  </div>

                  <div style={{ flex: 1, fontFamily: 'var(--font-mono)', fontSize: '0.875rem', color: '#e2e8f0', lineHeight: 1.7, whiteSpace: 'pre-wrap' }}>
                    {streamedText ? (
                      streamedText
                    ) : (
                      <span style={{ color: 'var(--text-muted)' }}>
                        Click "Run Local Inference Stream" to test simulated local weights execution...
                      </span>
                    )}
                    {isInferencing && <span style={{ display: 'inline-block', width: '8px', height: '14px', background: 'var(--accent-cyan)', marginLeft: '4px', verticalAlign: 'middle' }} />}
                  </div>

                  <div style={{ display: 'flex', alignItems: 'center', gap: '1.25rem', marginTop: '1.25rem', paddingTop: '0.75rem', borderTop: '1px solid rgba(255, 255, 255, 0.06)', fontSize: '0.75rem', fontFamily: 'var(--font-mono)', color: 'var(--text-muted)' }}>
                    <div>LATENCY: <strong style={{ color: '#ffffff' }}>{ragStats.latency}</strong></div>
                    <div>TOKENS GENERATED: <strong style={{ color: '#ffffff' }}>{ragStats.tokens}</strong></div>
                    <div>LOCAL ON-PREM: <strong style={{ color: 'var(--accent-emerald)' }}>ACTIVE</strong></div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* TAB 2: ANDROID KOTLIN EMULATOR */}
          {activeTab === 'android' && (
            <div style={{ padding: '2rem' }}>
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: '1fr',
                  gap: '2rem',
                  alignItems: 'center',
                }}
                className="sandbox-grid"
              >
                {/* Simulated Phone Chassis */}
                <div style={{ maxWidth: '340px', margin: '0 auto', width: '100%' }}>
                  <div
                    style={{
                      background: '#090b11',
                      border: '8px solid #1a2030',
                      borderRadius: '40px',
                      padding: '1.5rem 1rem',
                      boxShadow: '0 20px 40px rgba(0, 0, 0, 0.8)',
                    }}
                  >
                    {/* Phone Notch */}
                    <div style={{ width: '80px', height: '14px', background: '#1a2030', borderRadius: '8px', margin: '0 auto 1.25rem auto' }} />

                    {/* Compose App UI Header */}
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.25rem' }}>
                      <div style={{ fontSize: '0.85rem', fontWeight: 700, color: '#ffffff' }}>Kinetix Mobile</div>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.35rem', fontSize: '0.7rem', color: 'var(--accent-cyan)' }}>
                        <Wifi size={12} />
                        <span>120Hz</span>
                      </div>
                    </div>

                    {/* Reactive State Counter Component */}
                    <div
                      style={{
                        background: 'rgba(255, 255, 255, 0.04)',
                        borderRadius: '16px',
                        padding: '1rem',
                        marginBottom: '1rem',
                        textAlign: 'center',
                      }}
                    >
                      <div style={{ fontSize: '0.7rem', color: 'var(--text-muted)', fontFamily: 'var(--font-mono)' }}>
                        MutableStateFlow&lt;Int&gt;
                      </div>
                      <div style={{ fontSize: '2.5rem', fontWeight: 800, color: '#ffffff', margin: '0.25rem 0' }}>
                        {composeCounter}
                      </div>
                      <div style={{ display: 'flex', gap: '0.5rem', justifyContent: 'center' }}>
                        <button
                          onClick={() => {
                            sfx.playClick();
                            setComposeCounter(c => c - 1);
                          }}
                          style={{ width: '38px', height: '38px', borderRadius: '10px', background: 'rgba(255, 255, 255, 0.1)', border: 'none', color: '#fff', fontSize: '1.1rem', cursor: 'pointer' }}
                        >
                          -
                        </button>
                        <button
                          onClick={() => {
                            sfx.playClick();
                            setComposeCounter(c => c + 1);
                          }}
                          style={{ width: '38px', height: '38px', borderRadius: '10px', background: 'var(--accent-indigo)', border: 'none', color: '#fff', fontSize: '1.1rem', cursor: 'pointer' }}
                        >
                          +
                        </button>
                      </div>
                    </div>

                    {/* BLE Peripheral List */}
                    <div style={{ marginBottom: '1rem' }}>
                      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                        <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)', fontWeight: 600 }}>BLE GATT CLIENT</span>
                        <button
                          onClick={handleScanBle}
                          disabled={isScanningBle}
                          style={{ background: 'none', border: 'none', color: 'var(--accent-cyan)', fontSize: '0.7rem', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '0.2rem' }}
                        >
                          <RefreshCw size={10} className={isScanningBle ? 'animate-spin' : ''} />
                          <span>{isScanningBle ? 'Scanning...' : 'Scan'}</span>
                        </button>
                      </div>

                      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
                        {discoveredDevices.map((d, i) => (
                          <div
                            key={i}
                            style={{
                              background: 'rgba(255, 255, 255, 0.03)',
                              borderRadius: '8px',
                              padding: '0.45rem 0.65rem',
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'space-between',
                              fontSize: '0.75rem',
                            }}
                          >
                            <span style={{ color: '#ffffff' }}>{d.name}</span>
                            <span style={{ color: 'var(--accent-emerald)', fontFamily: 'var(--font-mono)' }}>{d.rssi} dBm</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Offline Room Sync Indicator */}
                    <div
                      style={{
                        padding: '0.65rem',
                        borderRadius: '10px',
                        background: offlineSyncActive ? 'rgba(16, 185, 129, 0.1)' : 'rgba(239, 68, 68, 0.1)',
                        border: `1px solid ${offlineSyncActive ? 'rgba(16, 185, 129, 0.3)' : 'rgba(239, 68, 68, 0.3)'}`,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        fontSize: '0.75rem',
                      }}
                    >
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                        <Database size={13} style={{ color: offlineSyncActive ? '#34d399' : '#f87171' }} />
                        <span style={{ color: '#ffffff' }}>Room SQLite Sync</span>
                      </div>
                      <span style={{ color: offlineSyncActive ? '#34d399' : '#f87171', fontWeight: 600 }}>
                        {offlineSyncActive ? 'ACTIVE' : 'QUEUED'}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Explanation on Android Technical Excellence */}
                <div>
                  <h3 style={{ fontSize: '1.45rem', fontWeight: 700, marginBottom: '1rem', color: '#ffffff' }}>
                    Modern Kotlin Android Paradigms
                  </h3>
                  <p style={{ color: 'var(--text-secondary)', lineHeight: 1.7, marginBottom: '1.5rem' }}>
                    Constructed using declarative Jetpack Compose, Kotlin Coroutines, and Flow for reactive unidirectional state flow (MVI). Built to withstand intermittent network connectivity through offline-first Room database synchronization and background WorkManager jobs.
                  </p>

                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                    {[
                      "Pure Kotlin 2.0 with Jetpack Compose & Material 3",
                      "Coroutines & StateFlow eliminating UI jank and memory leaks",
                      "Bluetooth Low Energy (BLE) GATT client integration",
                      "Room DB with multi-threaded offline-first sync reconciliation"
                    ].map((feat, i) => (
                      <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                        <CheckCircle2 size={16} style={{ color: 'var(--accent-cyan)' }} />
                        <span style={{ fontSize: '0.9rem', color: '#e2e8f0' }}>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* TAB 3: FULLSTACK EVENT BUS */}
          {activeTab === 'fullstack' && (
            <div style={{ padding: '2rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.5rem' }}>
                <div>
                  <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: '#ffffff' }}>
                    Live WebSocket Event Stream
                  </h3>
                  <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>
                    Real-time JSON message broadcast pipeline with sub-millisecond dispatch
                  </div>
                </div>

                <button
                  onClick={() => {
                    sfx.playClick();
                    setIsStreamingEvents(!isStreamingEvents);
                  }}
                  style={{
                    padding: '0.45rem 0.95rem',
                    borderRadius: 'var(--radius-full)',
                    background: isStreamingEvents ? 'rgba(239, 68, 68, 0.15)' : 'rgba(16, 185, 129, 0.15)',
                    border: `1px solid ${isStreamingEvents ? 'rgba(239, 68, 68, 0.3)' : 'rgba(16, 185, 129, 0.3)'}`,
                    color: isStreamingEvents ? '#fca5a5' : '#86efac',
                    fontSize: '0.75rem',
                    fontFamily: 'var(--font-mono)',
                    cursor: 'pointer',
                  }}
                >
                  {isStreamingEvents ? 'Pause Feed' : 'Resume Feed'}
                </button>
              </div>

              {/* Event Logs Table */}
              <div
                style={{
                  background: '#07090e',
                  borderRadius: '16px',
                  border: '1px solid rgba(255, 255, 255, 0.08)',
                  overflow: 'hidden',
                }}
              >
                <div
                  style={{
                    display: 'grid',
                    gridTemplateColumns: '100px 200px 1fr',
                    padding: '0.75rem 1.25rem',
                    background: 'rgba(255, 255, 255, 0.02)',
                    borderBottom: '1px solid rgba(255, 255, 255, 0.06)',
                    fontSize: '0.75rem',
                    fontFamily: 'var(--font-mono)',
                    color: 'var(--text-muted)',
                  }}
                >
                  <div>TIMESTAMP</div>
                  <div>CHANNEL / TOPIC</div>
                  <div>JSON PAYLOAD DISPATCH</div>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column' }}>
                  {eventLogs.map((log) => (
                    <div
                      key={log.id}
                      style={{
                        display: 'grid',
                        gridTemplateColumns: '100px 200px 1fr',
                        padding: '0.85rem 1.25rem',
                        borderBottom: '1px solid rgba(255, 255, 255, 0.04)',
                        fontSize: '0.8rem',
                        fontFamily: 'var(--font-mono)',
                        alignItems: 'center',
                      }}
                    >
                      <div style={{ color: 'var(--text-muted)' }}>{log.time}</div>
                      <div style={{ color: 'var(--accent-cyan)' }}>{log.topic}</div>
                      <div style={{ color: '#93c5fd', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                        {log.payload}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      <style>{`
        @media (min-width: 768px) {
          .sandbox-grid {
            grid-template-columns: 1fr 1.2fr !important;
          }
        }
      `}</style>
    </section>
  );
};
