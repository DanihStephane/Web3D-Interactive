interface Particle {
  x: number;
  y: number;
  speed: number;
  radius: number;
}

export class ParticleSystem {
  private particles: Particle[] = [];
  private ctx: CanvasRenderingContext2D;
  private width: number;
  private height: number;

  constructor(ctx: CanvasRenderingContext2D, width: number, height: number) {
    this.ctx = ctx;
    this.width = width;
    this.height = height;
    this.initParticles();
  }

  private initParticles() {
    this.particles = [];
    const numberOfParticles = Math.floor((this.width * this.height) / 8000);
    
    for (let i = 0; i < numberOfParticles; i++) {
      this.particles.push({
        x: Math.random() * this.width,
        y: Math.random() * this.height,
        speed: Math.random() * 0.3 + 0.1,
        radius: Math.random() * 2 + 1
      });
    }
  }

  public resize(width: number, height: number) {
    this.width = width;
    this.height = height;
    this.initParticles();
  }

  public draw() {
    this.ctx.fillStyle = 'rgba(240, 240, 255, 0.1)';
    this.ctx.fillRect(0, 0, this.width, this.height);

    this.particles.forEach((particle, i) => {
      this.updateParticle(particle);
      this.drawParticle(particle);
      this.drawConnections(particle, i);
    });
  }

  private updateParticle(particle: Particle) {
    particle.y -= particle.speed;
    if (particle.y < -10) {
      particle.y = this.height + 10;
    }
  }

  private drawParticle(particle: Particle) {
    this.ctx.beginPath();
    this.ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
    const gradient = this.ctx.createRadialGradient(
      particle.x, particle.y, 0,
      particle.x, particle.y, particle.radius
    );
    gradient.addColorStop(0, 'rgba(100, 149, 237, 0.8)');
    gradient.addColorStop(1, 'rgba(100, 149, 237, 0)');
    this.ctx.fillStyle = gradient;
    this.ctx.fill();
  }

  private drawConnections(particle: Particle, index: number) {
    this.particles.forEach((particle2, j) => {
      if (index === j) return;
      const dx = particle.x - particle2.x;
      const dy = particle.y - particle2.y;
      const distance = Math.sqrt(dx * dx + dy * dy);

      if (distance < 150) {
        this.ctx.beginPath();
        const gradient = this.ctx.createLinearGradient(
          particle.x, particle.y,
          particle2.x, particle2.y
        );
        const alpha = 0.2 * (1 - distance / 150);
        gradient.addColorStop(0, `rgba(100, 149, 237, ${alpha})`);
        gradient.addColorStop(1, `rgba(100, 149, 237, 0)`);
        this.ctx.strokeStyle = gradient;
        this.ctx.lineWidth = 0.5;
        this.ctx.moveTo(particle.x, particle.y);
        this.ctx.lineTo(particle2.x, particle2.y);
        this.ctx.stroke();
      }
    });
  }
}